import axios from "axios";
import { UNAUTH_HEADER_CONFIG, AUTH_HEADER_CONFIG } from "api/config";
import { EndPoints } from "constants/endpoints";
import { SignUpUser } from "types/structs";
import { appConfig } from "configs/env.config";

 const axiosInstance = axios.create({baseURL: "https://gamblr-api.onrender.com/api/v1", headers: {
    'x-gamblr-key': appConfig().X_GAMBLR_KEY,
 }})

 axiosInstance.interceptors.response.use((req)=> {
    return req;
 }, (err)=> {
    console.log(err.response.data);
})

export const signUp = async (payload: SignUpUser) => {
  try {
    const response = await axiosInstance.post('auth/signup', payload, {
      headers: { ...AUTH_HEADER_CONFIG },
    });
    console.log("at the function", response.data);
    return response.data;
  }  catch (e) {
    const error = e as any;

   // console.log('damn baby', error.response.data)

    //console.error("Error in sign-up request:", error);
    throw error;
  }
};

