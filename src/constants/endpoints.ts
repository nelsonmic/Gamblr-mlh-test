import { appConfig } from "configs/env.config";

const config = appConfig();

// key_ signifies url need params
export const EndPoints = {
   signUp: `${config.BASE_URL}/auth/signup`,
   signIn: `${config.BASE_URL}/auth/login`,
   verifyUserEmail: `${config.BASE_URL}/auth/signup/verify/email`,
   resendVerificationOtp: `${config.BASE_URL}/auth/resend-verification`,
   checkUsername_: `${config.BASE_URL}/auth/check-username?username=`,
   getUserProfile: `${config.BASE_URL}/user/profile`,
   updateUserInfo: `${config.BASE_URL}/user/profile/update`,
   createUserPin: `${config.BASE_URL}/user/pin/create`,
   verifyUserPin: `${config.BASE_URL}/user/pin/verify`,
   updatePin: `${config.BASE_URL}/user/pin/update`,
   updatePassword: `${config.BASE_URL}/user/password/update`,
}