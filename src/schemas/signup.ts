import { z } from "zod";

export const SignupFormZodSchema = () => {
  return z
    .object({
      email_address: z
        .string({ required_error: "Email is required" })
        .min(5, { message: "Email is required" })
        .email({ message: "Please enter a valid email address" }),
      first_name: z
        .string({ required_error: "First name is required" })
        .min(2, { message: "First name is too short" }),

      last_name: z
        .string({ required_error: "Last name is required" })
        .min(2, { message: "Last name is too short" }),
      phone_number: z
        .string({ required_error: "Phone Number is required" })
        .min(11, { message: "Phone Number is too short" }),
      profile_image: z.string({ message: "" }).optional(),
      home_address: z.string({ message: "Invalid input" }).optional(),
      password: z
        .string({ required_error: "Password is required" })
        .min(8, { message: "Password can not be less than 8 characters" })
        .max(14, { message: "Password can not be more than 14 characters" })
        .refine((password: string) => /[A-Z]/.test(password), {
          message: "Password must contain uppercase characters",
        })
        .refine((password: string) => /[a-z]/.test(password), {
          message: "Password must contain lowercase characters",
        })
        .refine((password: string) => /[0-9]/.test(password), {
          message: "Password must contain number characters",
        })
        .refine((password: string) => /[!@#$%^&*]/.test(password), {
          message: "Password must contain special characters",
        }),
      confirmPassword: z.string({
        required_error: "Please confirm your password",
      }),
    })
    .refine(
      (values) => {
        return values.password === values.confirmPassword;
      },
      {
        message: "Password must match",
        path: ["confirmPassword"],
      }
    );
};
