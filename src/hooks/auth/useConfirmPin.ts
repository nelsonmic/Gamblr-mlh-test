import { useToast } from "react-native-toast-notifications"
import { useCatToken } from "./useCatToken";
import { useNavigateTo } from "hooks/useNavigateTo";
import { useMutation } from "@tanstack/react-query";
import { confirmPin } from "api/mutations/confirm-pin";
import { BlankResponse, CreatePinPayload } from "types/structs";
import { debug } from "handlers/helpers/debugger";
import { handleApiError } from "handlers/helpers/handleApiError";

export const useConfirmPin = () => {
      const toast = useToast();
      const { catToken } = useCatToken();
      const { goTo } = useNavigateTo();
      const methods = useMutation<BlankResponse<any>, any, CreatePinPayload>({
            mutationFn: (props) => confirmPin(props, catToken || "")
      })

      const _confirmPin = (payload: CreatePinPayload) => {
            return methods.mutateAsync(payload)
            .then((res) => debug("info", res))
            .catch((err) => {
                  handleApiError(err, toast.show);
            })
      }

      return {
            ...methods,
            confirmPin: _confirmPin
      }
}