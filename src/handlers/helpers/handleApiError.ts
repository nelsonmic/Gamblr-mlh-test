import { ToastOptions } from "react-native-toast-notifications";
import { FailedApiResponse } from "types/structs";
import { capitalizeFirstLetter } from "./capitalizeFirstLetter";

export type TypeProp = "normal" | "success" | "danger" | "warning" | "info"

export const handleApiError = (
  error: FailedApiResponse,
  showToast: (message: string, options?: ToastOptions ) => void,
  options: ToastOptions,
) => {
  showToast(capitalizeFirstLetter(error?.message || "An error occurred"), {...options, type: "danger"});
};
