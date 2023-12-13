import { useMutation } from "@tanstack/react-query";
import { verifyUserEmail } from "api/mutations/verify-user-email";
import { ToastNotificationTitles } from "constants/enums";
import { handleApiError } from "handlers/helpers/handleApiError";
import { useNavigateTo } from "hooks/useNavigateTo"
import { Screens } from "navigations/Screens";
import { useToast } from "react-native-toast-notifications";
import { VerifyUserEmailPayload, VerifyUserEmailResponse } from "types/structs";

export const useVerifyUserEmail = () => {
      const toast = useToast();
      const gotTo = useNavigateTo();
      const methods = useMutation<VerifyUserEmailResponse, Error, VerifyUserEmailPayload>({
            mutationFn: (props) => verifyUserEmail(props) 
      })

      const _verifyUserEmail = (payload: VerifyUserEmailPayload) => {
            return methods.mutateAsync(payload)
            .then(() => gotTo(Screens.Congratulations))
            .catch((err) => {
                  handleApiError(err.response.data, toast.show, { data: ToastNotificationTitles.SomethingWentWrong});
            })
      }

      return {
            ...methods,
            verifyUserEmail: _verifyUserEmail
      }
}