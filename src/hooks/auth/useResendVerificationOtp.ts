import { useMutation } from "@tanstack/react-query";
import { resendVerificationOtp } from "api/mutations/resendVerificationOtp";
import { ToastNotificationTitles } from "constants/enums";
import { handleApiError } from "handlers/helpers/handleApiError";
import { useToast } from "react-native-toast-notifications"
import { PlainApiResponse, ResendVerificationOtpPayload } from "types/structs";

export const useResendVerificationOtp = () => {
      const toast = useToast();
      const methods = useMutation<PlainApiResponse, Error, ResendVerificationOtpPayload>({
            mutationFn: (props) => resendVerificationOtp(props)
      });

      const _reseendVerificationOtp = (payload: ResendVerificationOtpPayload) => {
            return methods.mutateAsync(payload)
            .then((res) => toast.show(res.data.message || "", {type: "success", data: ToastNotificationTitles.RequestSuccess}))
            .catch((err) => {
                  handleApiError(err, toast.show);             
            })
      }

      return {
            ...methods,
            resendVerificationOtp: _reseendVerificationOtp
      }
}