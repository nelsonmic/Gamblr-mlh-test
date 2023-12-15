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

export interface User {
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
interface VerifyUserEmail {
  first_name: string;
  last_name: string;
  username: string;
  is_active: boolean;
  createdAt: string;
  updatedAt: string;
  id: string;
  email: {
    address: string;
    is_verified: boolean;
  };
  phone: {
    number: string;
    is_verified: boolean;
  };
}

export type VerifyUserEmailResponse = ApiResponse<VerifyUserEmail>

export type ResendVerificationOtpPayload  = Pick<VerifyUserEmailPayload, "email">&{
      type: string;
}

export type SignInUserPayload = {
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

interface SignInUser{
 cat: string;
  user: {
    first_name: string;
    last_name: string;
    username: string;
    is_active: boolean;
    has_pin: boolean;
    devices: [];
    activity_log: [];
    createdAt: string;
    updatedAt: string;
    id: string;
    meta: {
      gender: null;
      dob: null;
      location: string;
      bio: null;
      socials: [];
    };
    email: {
      address: string;
      is_verified: boolean;
    };
    phone: {
      number: string;
      is_verified: boolean;
    };
  };
}

export type SignInUserResponse = ApiResponse<SignInUser>;