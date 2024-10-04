/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import CustomButton from "@/components/Button";
import { Input } from "@/components/Input";
import Navbar from "@/components/Navbar";
import useResetPassword, {
  ResetPasswordRequestType,
} from "@/hooks/mutations/auth/useResetPassword";
import { ResetPasswordFormZodSchema } from "@/schemas/ResetPassword";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const ResetPasswordFormSchema = ResetPasswordFormZodSchema();

type ResetPasswordFormInputs = z.infer<typeof ResetPasswordFormSchema>;

const ResetPassword = () => {
  const router = useRouter();
  const form = useForm<ResetPasswordFormInputs>({
    resolver: zodResolver(ResetPasswordFormSchema),
    mode: "onBlur",
  });
  const resetPasswordMutation = useResetPassword();

  const submitHandler = (e: ResetPasswordRequestType) => {
    resetPasswordMutation.mutate(e, {
      onSuccess: (resp) => {
        if (resp.data.responseCode !== 200) {
          toast.error(resp.data?.responseMessage);
        } else {
          toast.success(resp.data?.responseMessage);
          router.push("/sign-in");
        }
      },
      onError: (data) => {
        //@ts-ignore
        toast.error(data?.response?.data?.responseMessage);
      },
    });
  };
  const onSubmit = (data: any) => {
    submitHandler(data);
  };
  return (
    <div>
      <Navbar />
      <div className=" flex justify-center items-center py-5 flex-col w-full gap-7 h-[80svh] ">
        <h3 className=" font-bold sm:text-3xl pt-10 text-xl text-center ">
          Create New Password
        </h3>
        <form
          className="w-full grid gap-5 max-w-[30rem] md:px-10 px-5 "
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className="flex flex-col w-full justify-center items-center  gap-6  ">
            <Input
              type="email"
              name="email_address"
              id="email_address"
              label="Email Address"
              placeholder="Enter your email address"
              control={form.control}
            />
            <Input
              type="password"
              name="default_password"
              id="default_password"
              label="Default Password"
              placeholder="Enter default password"
              control={form.control}
            />
            <Input
              type="password"
              name="new_password"
              id="new_password"
              label="New Password"
              placeholder="Enter your new password"
              control={form.control}
            />
          </div>

          <CustomButton
            text="Reset Password"
            variant="primary"
            type="submit"
            isLoading={resetPasswordMutation.isPending}
          />
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
