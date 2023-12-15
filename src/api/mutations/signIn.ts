import { AUTH_HEADER_CONFIG } from "api/config"
import axios, { AxiosResponse } from "axios"
import { EndPoints } from "constants/endpoints"
import { SignInUserPayload } from "types/structs"

export const signIn = async (payload: SignInUserPayload): Promise<any> => {
      const response: AxiosResponse<any> = await axios.post(EndPoints.signIn, payload, {
            headers: {...AUTH_HEADER_CONFIG}
      })

      return response;
}