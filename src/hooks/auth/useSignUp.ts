import { useMutation } from "@tanstack/react-query";
import { signUp } from "api/mutations/sign-up";
import { SignUpResponse, SignUpUser } from "types/structs";

export const useSignUp = () => {
  return useMutation<SignUpResponse, any, SignUpUser>({mutationFn: (props) => signUp(props)});
};
