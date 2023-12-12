import { useMutation } from "@tanstack/react-query";
import { signUp } from "api/mutations/signUp";
import { debug } from "handlers/helpers/debugger";
import { useToast } from "react-native-toast-notifications";
import { handleApiError } from "handlers/helpers/handleApiError";
import { SignUpResponse, SignUpUser } from "types/structs";
import { useNavigateTo } from "hooks/useNavigateTo";
import { Screens } from "navigations/Screens";

export const useSignUp = () => {
  const toast = useToast();
  const goTo = useNavigateTo();
  const methods = useMutation<SignUpResponse, any, SignUpUser>({ mutationFn: (props) => signUp(props) });
  
  const _signUp = (payload: SignUpUser) => {
    return methods.mutateAsync(payload)
    .then(() => goTo(Screens.VerifyScreen))
    .catch((err) => {
      handleApiError(err.response.data, toast.show, { data: "Something went wrong!"});
    })
  }

  return {
    ...methods,
    signUp: _signUp
  }
};