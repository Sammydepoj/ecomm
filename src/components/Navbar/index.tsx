"use client";
import CloseMenuIcon from "@/assets/icons/CloseMenuicon";
import OpenMenuIcon from "@/assets/icons/OpenMenuIcon";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CustomButton from "../Button";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className={`bg-[#2B4880] flex justify-between items-center py-5 px-5`}>
      <div className="w-full">
        <Image src={""} alt="" />
      </div>
      <ul
        className={`flex items-center justify-between text-white lg:w-[70%] ${
          open
            ? "flex-col gap-10 absolute top-12 right-0 z-[100] bg-[#2B4880] py-3 rounded-lg w-max px-10"
            : "bg-transparent hidden lg:flex-row lg:flex lg:justify-between"
        }`}
      >
        <Link href={"/home"}>Home</Link>
        <li>Categories</li>
        <li>Contact Us</li>
        <Link href={"/sign-in"}>Login</Link>
        <CustomButton text="Sign Up" variant="primary" type="button" />
      </ul>

      <button
        onClick={() => {
          setOpen(!open);
        }}
        className=" lg:hidden "
      >
        {open ? <CloseMenuIcon /> : <OpenMenuIcon />}
      </button>
    </div>
  );
};

export default Navbar;
