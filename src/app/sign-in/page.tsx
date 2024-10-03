/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Navbar from "@/components/Navbar";
import { SigninFormZodSchema } from "@/schemas/signin";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";
import { Input } from "@/components/Input";
import CustomButton from "@/components/Button";
import useLogin, { LoginRequestType } from "@/hooks/mutations/auth/useLogin";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
const SigninFormSchema = SigninFormZodSchema();
type SigninFormInputs = z.infer<typeof SigninFormSchema>;

const SignIn = () => {
  const router = useRouter();
  const form = useForm<SigninFormInputs>({
    resolver: zodResolver(SigninFormSchema),
    mode: "onBlur",
  });
  const loginMutation = useLogin();

  const submitHandler = (e: LoginRequestType) => {
    loginMutation.mutate(e, {
      onSuccess: (resp) => {
        if (resp.data.responseCode !== 200) {
          toast.error(resp?.data?.responseMessage);
        } else {
          toast.success(resp.data?.responseMessage);
          router.push("/home");
        }
      },
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
    <div className=" ">
      <Navbar />
      <div className=" flex justify-center items-center py-5 flex-col w-full gap-7 h-[80svh]  ">
        <h3 className=" font-bold sm:text-3xl pt-10 text-xl ">
          Login your account
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
              className=""
            />
            <Input
              type="password"
              name="password"
              id="password"
              label="Password"
              placeholder="Enter your password"
              control={form.control}
              className=""
            />
          </div>
          <Link href={"/forgot-password"} className=" text-end text-[#0B6A96]">
            Forgot Password?
          </Link>{" "}
          <CustomButton text="Sign in" variant="primary" type="submit" />
          <div className=" ">
            Don&apos;t have an account ?{" "}
            <Link href={"/sign-up"} className="text-[#0B6A96]">
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
