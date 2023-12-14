import { useMutation } from "@tanstack/react-query";
import { signUp } from "api/mutations/signUp";
import { useToast } from "react-native-toast-notifications";
import { handleApiError } from "handlers/helpers/handleApiError";
import { SignUpResponse, SignUpUser } from "types/structs";
import { useNavigateTo } from "hooks/useNavigateTo";
import { Screens } from "navigations/Screens";
import { debug } from "handlers/helpers/debugger";

export const useSignUp = () => {
  const toast = useToast();
  const {goTo} = useNavigateTo();
  const methods = useMutation<SignUpResponse, any, SignUpUser>({ 
    mutationFn: (props) => signUp(props) 
  });
  
  const _signUp = (payload: SignUpUser) => {
    return methods.mutateAsync(payload)
    .then((res) =>{
        debug("info", `user sign up successful: ${res.data.data}`)
       goTo(Screens.VerifyScreen, {
        email: res.data.data.email.address
      }) 
    })
    .catch((err) => {
      handleApiError(err, toast.show);
    })
  }

  return {
    ...methods,
    signUp: _signUp
  }
};