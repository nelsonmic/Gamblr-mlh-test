import { UNAUTH_HEADER_CONFIG } from "api/config";
import axios, { AxiosResponse } from "axios";
import { EndPoints } from "constants/endpoints";
import { VerifyUserEmailPayload } from "types/structs";

export const verifyUserEmail = async (payload: VerifyUserEmailPayload): Promise<any> => {
      const response: AxiosResponse<any> = await axios.post(EndPoints.verifyUserEmail, payload, {
            headers: {...UNAUTH_HEADER_CONFIG}
      })

      return response;
}