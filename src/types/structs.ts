import { AxiosResponse } from "axios";

type BlankResponse<T> = {
      status: boolean;
      message?: string;
      data: T;   
}
export type ApiResponse<K> = AxiosResponse<BlankResponse<K>>;
export type FailedApiResponse = Omit<BlankResponse<any>, 'data'> & {
      code: number;
      error: string;
      message?: string
      response: any
}
export type PlainApiResponse = AxiosResponse<Omit<BlankResponse<any>, "data">>


interface User {
      first_name: string;
      last_name: string;
      username: string;
      is_active: boolean;
      has_pin: boolean;
      devices: any[];
      activity_log: any[];
      createdAt: string;
      updatedAt: string;
      id: string;
      meta: {
      gender: string;
      dob: string | null;
      location: string;
      bio: string;
      socials: {
            type: string;
            url: string;
            _id: string;
            id: string;
      }[];
      };
      email: {
            address: string;
            is_verified: boolean;
      };
      phone: {
            number: string;
            is_verified: boolean;
      };
}


export interface SignUpUser {
  first_name: string;
  last_name: string;
  username: string;
  phone: string;
  email: string;
  password: string;
}
export type SignUpResponse = ApiResponse<User>;


export type CheckUsername = {
      data: {
            data:{
                  exists: boolean;
            }
      }
}
export type CheckUsernameResponse = ApiResponse<CheckUsername>


export type VerifyUserEmailPayload = {
      email: string;
      otp: string;
}
type VerifyUserEmail = Omit<Omit<Omit<User, "meta">, "has_pin">, "devices">
export type VerifyUserEmailResponse = ApiResponse<VerifyUserEmail>
export type ResendVerificationOtpPayload  = Pick<VerifyUserEmailPayload, "email">&{
      type: string;
}


export type SignInUserWithEmailPayload = {
    email : string;
    password: string;
    device : {
        device_name: string;
        device_id: string;
        version: string;
        platform: string;
        os: string
      }
}
export type SignInUserWithUsernamePayload = Omit<SignInUserWithEmailPayload, "email"> & {
      username: string;
}
type SignInUser = {
 cat: string;
 user: User
}
export type SignInUserResponse = ApiResponse<SignInUser>;


export type CreatePinPayload = {
      pin: string
}

type CreatePin = Omit<User, "activity_log">

export type CreatePinResponse = ApiResponse<CreatePin>;

