import { ToastOptions } from "react-native-toast-notifications";
import { FailedApiResponse } from "types/structs";
import { capitalizeFirstLetter } from "./capitalizeFirstLetter";
import { ToastNotificationTitles } from "constants/enums";

export type TypeProp = "normal" | "success" | "danger" | "warning" | "info"

export const handleApiError = (
  error: FailedApiResponse,
  showToast: (message: string, options?: ToastOptions ) => void,
  options?: ToastOptions,
) => {
  showToast(
    capitalizeFirstLetter(error?.response ? error.response?.data.message : error.message), 
    {...options, type: "danger", data: error?.response ? error.response?.data.error : ToastNotificationTitles.SomethingWentWrong}
  );
};
