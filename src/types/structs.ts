
export type User = {
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

export type ApiResponse<T> = {
  status: boolean;
  message?: string;
  data: T;
};

export type FailedApiResponse = Omit<ApiResponse<any>, 'data'> & {
      code: number,
      error: string
}

export type SignUpResponse = ApiResponse<User>;
