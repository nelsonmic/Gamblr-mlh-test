import { useMutation } from "@tanstack/react-query";
import { signIn } from "api/mutations/signIn";
import { debug } from "handlers/helpers/debugger";
import { handleApiError } from "handlers/helpers/handleApiError";
import { useNavigateTo } from "hooks/useNavigateTo";
import { useToast } from "react-native-toast-notifications";
import { SignInUserPayload, SignInUserResponse } from "types/structs";
import { useCatToken } from "./useCatToken";
import { StorageKeys } from "constants/enums";
import { useEncryptedStorage } from "hooks/useEncryptedStorage";
import EncryptedStorage from "react-native-encrypted-storage";
import { Screens } from "navigations/Screens";

export const useSignIn = () => {
      const toast = useToast();
      const {goTo} = useNavigateTo();
      const { setCatToken } = useCatToken();
      const {setEncryptItemToStorage} = useEncryptedStorage()
      const methods = useMutation<SignInUserResponse, any, SignInUserPayload>({ 
            mutationFn: (props) => signIn(props) 
      });

      const _signIn = (payload: SignInUserPayload) => {
            return methods.mutateAsync(payload)
            .then(async (res) => {
                  const {cat, user} = res.data.data
                  debug("info", user)
                  setCatToken(cat)
                  setEncryptItemToStorage(StorageKeys.WelcomeUser, user.email.address)
                  if(user.has_pin){
                        goTo(Screens.CreatePinScreen)
                  }else{
                        goTo(Screens.Home)
                  }
            })
            .catch((err) => {
                  handleApiError(err, toast.show);
            })
      }

      return {
            ...methods,
            signIn: _signIn
      }
}