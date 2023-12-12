import * as yup from "yup";
import { isValidPhoneNumber } from "./helpers/isValidPhoneNumber";

const nameSchema = yup.string();
const emailSchema = yup.string().email("Enter a valid email address");
const phoneSchema = yup.string().test("phone", "Phone number is invalid", isValidPhoneNumber);


export const signUpFormSchema = yup.object().shape({
  fullname: nameSchema,
  firstname: nameSchema.required("Enter first name"),
  lastname: nameSchema.required("Enter last name").min(2, "Too short"),
  username: yup.string().min(3, "Enter a user tag").required(),
  email: emailSchema.required("Email address is required"),
  password: yup
    .string()
    .min(6, "Too short")
    .required("Password is equired"),
  phone: phoneSchema.required("Phone number is required"),
  acceptTerms: yup.boolean().oneOf([true], 'Accept the terms and conditions'),
  isValidUsertag: yup.boolean().oneOf([true], 'Failed user tag check')
});

export type SignUpFormType = yup.InferType<typeof signUpFormSchema>;