import { useMutation } from "@tanstack/react-query";
import { signIn } from "api/mutations/signIn";
import { debug } from "handlers/helpers/debugger";
import { handleApiError } from "handlers/helpers/handleApiError";
import { useNavigateTo } from "hooks/useNavigateTo";
import { useToast } from "react-native-toast-notifications";
import { SignInUserWithEmailPayload, SignInUserResponse, SignInUserWithUsernamePayload } from "types/structs";
import { useCatToken } from "./useCatToken";
import { ErrorMessages, StorageKeys, ToastNotificationTitles } from "constants/enums";
import { useEncryptedStorage } from "hooks/useEncryptedStorage";
import { Screens } from "navigations/Screens";

export const useSignIn = () => {
      const toast = useToast();
      const {goTo} = useNavigateTo();
      const { setCatToken } = useCatToken();
      const {setEncryptItemToStorage} = useEncryptedStorage()
      const methods = useMutation<SignInUserResponse, any, SignInUserWithEmailPayload | SignInUserWithUsernamePayload>({ 
            mutationFn: (props) => signIn(props) 
      });
      //TODO: Store user to redux slice
      const _signIn = (payload: SignInUserWithEmailPayload | SignInUserWithUsernamePayload) => {
            return methods.mutateAsync(payload)
            .then(async (res) => {
                  const {cat, user} = res.data.data
                  debug("info", `User signed in successfully ${user.email.address}`)
                  setCatToken(cat)
                  setEncryptItemToStorage(StorageKeys.WelcomeUser, user.email.address)
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
                              email: (payload as SignInUserWithEmailPayload).email
                        });
                  }, 4000)
            })
      }

      return {
            ...methods,
            signIn: _signIn
      }
}