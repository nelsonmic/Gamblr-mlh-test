import { useMutation } from "@tanstack/react-query"
import { updatePin } from "api/mutations/update-pin"
import { handleApiError } from "handlers/helpers/handleApiError";
import { useCatToken } from "hooks/auth/useCatToken";
import { useNavigateTo } from "hooks/useNavigateTo";
import { Screens } from "navigations/Screens";
import { useToast } from "react-native-toast-notifications";
import { UpdatePinPayload, UpdatePinResponse } from "types/structs"

export const useUpdatePin = () => {
      const toast = useToast();
      const { catToken } = useCatToken();
      const { goTo } = useNavigateTo();
      const methods = useMutation<UpdatePinResponse, any, UpdatePinPayload>({
            mutationFn: (props) => updatePin(props, catToken || "")
      })
      const _updatePin = (payload: UpdatePinPayload) => {
            return methods.mutateAsync(payload)
                  .then(() => {
                        goTo(Screens.SuccessScreen, {
                              data: {
                                    title: "Pin updated successfully!",
                                    description: "You've successfully updated your Gamblr transaction PIN. If you didn't make this change, please contact support immediately. Stay secure and game on!",
                                    reroute: Screens.Settings
                              }
                        })
                  })
                  .catch((err) =>{
                        handleApiError(err, toast.show);
                  })
      }
      return {
            ...methods,
            updatePin: _updatePin
      }
}