import { useMutation } from "@tanstack/react-query";
import { signUp } from "api/mutations/sign-up";
import { debug } from "handlers/helpers/debugger";
import { useToast } from "react-native-toast-notifications";
import { handleApiError } from "handlers/helpers/handleApiError";
import { SignUpResponse, SignUpUser } from "types/structs";

export const useSignUp = () => {
  const toast = useToast()
  const methods = useMutation<SignUpResponse, any, SignUpUser>({ mutationFn: (props) => signUp(props) });
  
  const _signUp = (payload: SignUpUser) => {
    return methods.mutateAsync(payload)
    .then((res) => debug("info", res))
    .catch((err) => {
      debug("debug", err.response.data)
      handleApiError(err.response.data, toast.show, { data: "Something went wrong!"});
    })
  }

  return {
    ...methods,
    signUp: _signUp
  }
};