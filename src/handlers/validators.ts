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
  .min(8, "Password must be at least 8 characters")
  .matches(
    /[A-Za-z]/,
    "Password must include at least one letter"
  )
  .matches(
    /\d/,
    "Password must include at least one number"
  )
  .matches(
    /[@$!%*?&]/,
    "Password must include at least one special character"
  )
  .required("Password is required"),
  phone: phoneSchema.required("Phone number is required"),
  acceptTerms: yup.boolean().oneOf([true], 'Accept the terms and conditions'),
  isValidUsertag: yup.boolean().oneOf([true], 'Failed user tag check')
});

export type SignUpFormType = yup.InferType<typeof signUpFormSchema>;

export const signInFormSchema = yup.object().shape({
  email: yup.string().required("Email/tag is required"),
  password: yup.string().required("Password is required")
})

export type SignInFormType = yup.InferType<typeof signInFormSchema>;