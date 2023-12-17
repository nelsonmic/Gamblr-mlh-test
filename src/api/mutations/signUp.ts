import axios, { AxiosResponse } from "axios";
import { UNAUTH_HEADER_CONFIG } from "api/config";
import { EndPoints } from "constants/endpoints";
import { SignUpUser } from "types/structs";

export const signUp = async (payload: SignUpUser): Promise<any> => {
    const response: AxiosResponse<any> = await axios.post(EndPoints.signUp, payload, {
        headers: {...UNAUTH_HEADER_CONFIG}
    })

    return response;
};

