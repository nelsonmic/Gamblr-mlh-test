import axios, { AxiosResponse } from "axios";
import { EndPoints } from "constants/endpoints";
import { AUTH_HEADER_CONFIG } from "api/config";

export const checkUsernameExists = async (payload: string): Promise<any> => {
      const response : AxiosResponse<any> = await axios.get(`${EndPoints.checkUsername_}${payload}`, {
            headers: {...AUTH_HEADER_CONFIG}
      })
      return response;
}