import { UNAUTH_HEADER_CONFIG } from "api/config";
import axios, { AxiosResponse } from "axios"
import { EndPoints } from "constants/endpoints";
import { ResendVerificationOtpPayload } from "types/structs";

export const resendVerificationOtp = async (payload: ResendVerificationOtpPayload) => {
      const response: AxiosResponse<any> = await axios.post(EndPoints.resendVerificationOtp, payload, {
            headers: {...UNAUTH_HEADER_CONFIG}
      })

      return response;
}