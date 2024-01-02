"use client";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "../ui/button";
type Props = {};

const Socials = (props: Props) => {
  return (
    <div className="w-full flex items-center gap-2 ">
      <Button className="w-full " size={"lg"}>
        <FcGoogle className="h-6 w-6" />
      </Button>
      <Button className="w-full " size={"lg"}>
        <FaGithub className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default Socials;
