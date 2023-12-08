import { useMutation } from "@tanstack/react-query";
import { signUp } from "api/mutations/sign-up";
import { useCallback } from "react";
import { SignUpResponse, SignUpUser } from "types/structs";

export const useSignUp = () => {
  const signUpMutation = useMutation<SignUpResponse, Error, SignUpUser>({mutationFn: (props) => signUp(props)});

  const signUpUser = useCallback(
    async (credentials: SignUpUser) => {
      try {
        const result = await signUpMutation.mutateAsync(credentials);
        console.log(result);
        // Handle successful sign-up, e.g., show a success message.
      } catch (error) {
       // console.error("Error signing up:", error);
        // Handle error, e.g., show an error message.
      }
    },
    [signUpMutation]
  );

  return {
    signUpMutation,
    signUp: signUpUser,
  };
};
