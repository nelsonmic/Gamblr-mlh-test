import { useMutation } from "@tanstack/react-query"
import { updatePassword } from "api/mutations/update-password"
import { StorageKeys } from "constants/enums";
import { handleApiError } from "handlers/helpers/handleApiError";
import { useCatToken } from "hooks/auth/useCatToken"
import { useEncryptedStorage } from "hooks/useEncryptedStorage";
import { useNavigateTo } from "hooks/useNavigateTo";
import { Screens } from "navigations/Screens";
import { useToast } from "react-native-toast-notifications";
import { useSelector } from "react-redux";
import { UpdatePasswordPayload, UpdatePasswordResponse, User } from "types/structs";
export const useUpdatePassword = () => {
      const user = useSelector((state: {user:{user: User }}) => state.user.user);
      const toast = useToast();
      const { catToken } = useCatToken();
      const { reset } = useNavigateTo();
      const {setEncryptItemToStorage} = useEncryptedStorage();
      const methods = useMutation<UpdatePasswordResponse, any, UpdatePasswordPayload>({
            mutationFn: (props) => updatePassword(props, catToken || "")
      })

      const _updatePassword = (payload: UpdatePasswordPayload) => {
            return methods.mutateAsync(payload)
                  .then(() => {
                        setEncryptItemToStorage(StorageKeys.WelcomeUser, {
                              email: user.email.address,
                              password: payload.new_password,
                              username: user.username
                        })
                        reset({
                              index: 0,
                              routes: [{
                                    name: Screens.SuccessScreen, 
                                    params: {
                                          data:{
                                                title: "Password updated successfully!",
                                                description: "You've successfully updated your password. If you didn't make this change, please contact support immediately. Stay secure and game on!",
                                                reroute: Screens.Settings
                                          }
                                    } 
                              }]
                        }) 
                  })
                  .catch((err) => {
                        handleApiError(err, toast.show);
                  })
      }
      return {
            ...methods,
            updatePassword: _updatePassword
      }
}