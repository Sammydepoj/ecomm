import { z } from "zod";

export const ResetPasswordFormZodSchema = () => {
  return z
    .object({
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
