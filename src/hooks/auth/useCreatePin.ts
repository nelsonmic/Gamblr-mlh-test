import { useNavigateTo } from "hooks/useNavigateTo";
import { useToast } from "react-native-toast-notifications"
import { useMutation } from "@tanstack/react-query";
import { CreatePinPayload, CreatePinResponse } from "types/structs";
import { createPin } from "api/mutations/create-pin";
import { handleApiError } from "handlers/helpers/handleApiError";
import { useCatToken } from "./useCatToken";
import { Screens } from "navigations/Screens";

export const useCreatePin = () => {
      const toast = useToast();
      const { catToken } = useCatToken();
      const { goTo } = useNavigateTo();
      const methods = useMutation<CreatePinResponse, any, CreatePinPayload>({
            mutationFn: (props) => createPin(props, catToken || "")
      })

      const _createPin = (payload: CreatePinPayload) => {
            return methods.mutateAsync(payload)
            .then(() => goTo(Screens.Home))
            .catch((err) => {
                  handleApiError(err, toast.show);
            })

      }
      return {
            ...methods,
            createPin: _createPin
      }
}