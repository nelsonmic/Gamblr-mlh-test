
import { AUTH_HEADER_CONFIG } from "api/config"
import axios, { AxiosResponse } from "axios"
import { EndPoints } from "constants/endpoints"
import { CreatePinPayload } from "types/structs"

export const confirmPin = async (payload: CreatePinPayload, catToken: string): Promise<any> =>{
      const response: AxiosResponse<any> = await axios.post(EndPoints.confirmUserPin, payload, {
         headers: {...AUTH_HEADER_CONFIG, cat: catToken}           
      })

      return response;
}