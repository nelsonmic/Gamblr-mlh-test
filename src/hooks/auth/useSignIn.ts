import { useMutation } from "@tanstack/react-query";
import { signIn } from "api/mutations/signIn";
import { debug } from "handlers/helpers/debugger";
import { handleApiError } from "handlers/helpers/handleApiError";
import { useNavigateTo } from "hooks/useNavigateTo";
import { useToast } from "react-native-toast-notifications";
import { SignInUserResponse, SignInUserPayload } from "types/structs";
import { useCatToken } from "./useCatToken";
import { ErrorMessages, StorageKeys, ToastNotificationTitles } from "constants/enums";
import { useEncryptedStorage } from "hooks/useEncryptedStorage";
import { Screens } from "navigations/Screens";
import { useDispatch } from "react-redux";
import { setUser } from "slices/userSlice";
import { isValidEmail } from "handlers/helpers/isValidEmail";
import { useGetDeviceInfo } from "hooks/useGetDeviceInfo";

export const useSignIn = () => {
      const toast = useToast();
      const {device} = useGetDeviceInfo()
      const {goTo} = useNavigateTo();
      const { setCatToken } = useCatToken();
      const {setEncryptItemToStorage} = useEncryptedStorage()
      const dispatch = useDispatch();
      const methods = useMutation<SignInUserResponse, any, SignInUserPayload>({ 
            mutationFn: (props) => signIn(props) 
      });
      const _signIn = (payload: Omit<SignInUserPayload, "device">) => {
            const _payload: SignInUserPayload = {
                  password: payload.password,
                  device: {
                        device_id: device.device_id,
                        device_name: device.device_name,
                        os: device.os,
                        version: device.version,
                        platform: device.platform
                  }
            };

            if (isValidEmail(payload.email || "")) {
            _payload.email = payload.email;
            } else {
            _payload.username = payload.email;
            }

            return methods.mutateAsync(_payload)
            .then(async (res) => {
                  const {cat, user} = res.data.data
                  debug("info", `User signed in successfully ${user.email.address}`)
                  setCatToken(cat)
                  setEncryptItemToStorage(StorageKeys.WelcomeUser, {...payload, username: user.username})
                  dispatch(setUser(user))
                  if(user.has_pin){
                        goTo(Screens.BottomTabs)
                  }else{
                        goTo(Screens.CreatePinScreen)
                  }
            })
            .catch((err) => {
                  const errorMessage = err.response ? err.response.data.error : ToastNotificationTitles.SomethingWentWrong
                  handleApiError(err, toast.show);
                  setTimeout(()=>{
                        if(errorMessage === ErrorMessages.VerifyAccount) goTo(Screens.VerifyScreen, {
                              email: payload.email
                        });
                  }, 4000)
            })
      }

      return {
            ...methods,
            signIn: _signIn
      }
}