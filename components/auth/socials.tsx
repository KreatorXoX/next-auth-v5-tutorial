"use client";
import React from "react";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "../ui/button";
import { DEFAULT_REDIRECT } from "@/routes";

type Props = {};

const Socials = (props: Props) => {
  const onClickHandler = (provider: "google" | "github") => {
    signIn(provider, {
      callbackUrl: DEFAULT_REDIRECT,
    });
  };
  return (
    <div className="w-full flex items-center gap-2 ">
      <Button
        variant={"secondary"}
        className="w-full "
        size={"lg"}
        onClick={() => {
          return onClickHandler("google");
        }}
      >
        <FcGoogle className="h-6 w-6" />
      </Button>
      <Button
        variant={"secondary"}
        className="w-full "
        size={"lg"}
        onClick={() => {
          return onClickHandler("github");
        }}
      >
        <FaGithub className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default Socials;
