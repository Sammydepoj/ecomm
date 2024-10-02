/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Navbar from "@/components/Navbar";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";
import { Input } from "@/components/Input";
import CustomButton from "@/components/Button";
import { SignupFormZodSchema } from "@/schemas/signup";
import React, { ChangeEvent, useState } from "react";
import useSignUp, { SignupRequestType } from "@/hooks/mutations/auth/useSignUp";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const SignupFormSchema = SignupFormZodSchema();
type SignupFormInputs = z.infer<typeof SignupFormSchema>;

const SignUp = () => {
  const router = useRouter();

  const form = useForm<SignupFormInputs>({
    resolver: zodResolver(SignupFormSchema),
    mode: "onBlur",
  });
  const [base64, setBase64] = useState<string | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      convertFileToBase64(file, (base64String, error) => {
        if (error) {
          console.error("Failed to convert file.", error);
        } else {
          setBase64(base64String);
          form.setValue("profile_image", base64String as string);
        }
      });
    }
  };
  const convertFileToBase64 = (
    file: File,
    callback: (base64String: string | null, error?: Error) => void
  ): void => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      callback(reader.result as string);
    };

    reader.onerror = (error) => {
      console.error("Error converting file to base64:", error);
      callback(null, error as unknown as Error);
    };
  };
  React.useEffect(() => {
    if (base64) {
      form.setValue("profile_image", base64);
    }
  }, [base64, form]);

  const signupMutation = useSignUp();

  const submitHandler = (e: SignupRequestType) => {
    signupMutation.mutate(e, {
      onSuccess: (resp) => {
        if (resp.data.responseCode === 201) {
          toast.success(resp.data?.responseMessage);

          router.push("/sign-in");
        } else {
          toast.error(resp.data?.responseMessage);
        }
      },
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onError: (resp) => {
        toast.error("Something went wrong");
      },
    });
  };
  const onSubmit = (data: any) => {
    submitHandler({
      role_type: "USER",
      email_address: data.email_address,
      first_name: data.first_name,
      home_address: data.home_address,
      last_name: data.last_name,
      password: data.password,
      phone_number: data.phone_number,
      profile_image: data.profile_image,
    });
  };
  return (
    <div className=" ">
      <Navbar />
      <div className=" flex justify-center items-center py-5 flex-col w-full gap-5   ">
        <h3 className=" font-bold sm:text-3xl pt-4 text-xl ">
          Create Account{" "}
        </h3>
        <form
          className="w-full grid gap-5 max-w-[30rem] md:px-10 px-5 "
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className="flex flex-col w-full justify-center items-center  gap-4  ">
            <Input
              type="text"
              name="first_name"
              id="first_name"
              label="First Name"
              placeholder="Enter your first name"
              control={form.control}
            />
            <Input
              type="text"
              name="last_name"
              id="last_name"
              label="Last Name"
              placeholder="Enter your Last name"
              control={form.control}
            />
            <Input
              type="tel"
              name="phone_number"
              id="phone_number"
              label="Phone Number"
              placeholder="08012345678"
              control={form.control}
            />
            <Input
              type="email"
              name="email_address"
              id="email"
              label="Email Address"
              placeholder="Enter your email address"
              control={form.control}
              className=""
            />
            <Input
              type="text"
              name="home_address"
              id="home_address"
              label=" Address (Optional) "
              placeholder="Enter your address"
              control={form.control}
              className=""
            />
            <div>
              <label
                htmlFor="profile_image"
                className="  text-xs text-black text-start pb-1"
              >
                Upload Profile Photo
              </label>

              <input
                className="max-h-full w-full max-w-4xl border px-3 rounded-xl bg-transparent  py-3 text-sm tracking-normal outline-none"
                type="file"
                name="profile_image"
                id="profile_image"
                onChange={(e) => {
                  handleFileChange(e);
                }}
              />
            </div>

            <Input
              type="password"
              name="password"
              id="password"
              label="Password"
              placeholder="Enter your password"
              control={form.control}
              className=""
            />
            <Input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              label="Confirm Password"
              placeholder="Confirm password"
              control={form.control}
            />
          </div>
          <CustomButton text="Sign up" variant="primary" type="submit" />
          <div className=" ">
            Already have an account ?
            <Link href={"/sign-in"} className="text-[#0B6A96]">
              Sign in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
