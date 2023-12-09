import { useToast } from "react-native-toast-notifications";
import { FailedApiResponse } from "types/structs"

export const handleApiError = (error: FailedApiResponse) => {
      const toast = useToast();
      toast.show(error?.message || '', {type: "danger"})
};