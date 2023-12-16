import { AUTH_HEADER_CONFIG } from "api/config"
import axios, { AxiosResponse } from "axios"
import { EndPoints } from "constants/endpoints"

export const createPin = async (payload): Promise<any> =>{
      const response: AxiosResponse<any> = await axios.post(EndPoints.createUserPin, payload, {
         headers: {...AUTH_HEADER_CONFIG}           
      })
}