
import { AUTH_HEADER_CONFIG } from "api/config"
import axios, { AxiosResponse } from "axios"
import { EndPoints } from "constants/endpoints"
import { UpdatePinPayload } from "types/structs"

export const updatePin = async (payload: UpdatePinPayload, catToken: string): Promise<any> =>{
      const response: AxiosResponse<any> = await axios.patch(EndPoints.updatePin, payload, {
         headers: {...AUTH_HEADER_CONFIG, cat: catToken}           
      })

      return response;
}