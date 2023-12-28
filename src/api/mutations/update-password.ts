import { AUTH_HEADER_CONFIG } from "api/config"
import axios, { AxiosResponse } from "axios"
import { EndPoints } from "constants/endpoints"
import { UpdatePasswordPayload } from "types/structs"

export const updatePassword = async (payload: UpdatePasswordPayload, catToken: string): Promise<any> => {
      const response: AxiosResponse<any> = await axios.patch(EndPoints.updatePassword, payload, {
            headers: {...AUTH_HEADER_CONFIG, cat: catToken}
      })

      return response;
}