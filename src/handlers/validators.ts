import * as yup from "yup";
import { isValidPhoneNumber } from "./helpers/isValidPhoneNumber";

const nameSchema = yup.string().min(2, "Enter a name");
const emailSchema = yup.string().email("Enter a valid email address");
const phoneSchema = yup.string().test("phone", "Phone number is invalid", isValidPhoneNumber);


export const signUpFormSchema = yup.object().shape({
  fullname: nameSchema.required(),
  username: yup.string().min(2, "Enter a user tag").required(),
  email: emailSchema.required("Email address is required"),
  password: yup
    .string()
    .min(8, "Too short")
      //   .matches(/^(?=.*[!@#$%^&*])/, "Missing special character")
    .required("Password is equired"),
  phone: phoneSchema.required("Phone number is required"),
});

export type SignUpFormType = yup.InferType<typeof signUpFormSchema>;