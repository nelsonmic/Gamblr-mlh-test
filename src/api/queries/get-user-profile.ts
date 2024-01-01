import { AUTH_HEADER_CONFIG } from "api/config"
import axios, { AxiosResponse } from "axios"
import { EndPoints } from "constants/endpoints"

export const getUserProfile = async (catToken: string | null ) => {
      const headers = {
            ...AUTH_HEADER_CONFIG,
            cat: catToken,
      };
      const response : AxiosResponse<any> = await axios.get(EndPoints.getUserProfile, {
            headers
      })

      return response;
}