import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

type Props = { title: string; href: string };

const BackButton = ({ href, title }: Props) => {
  return (
    <Button
      asChild
      variant={"link"}
      className="w-full text-neutral-700 underline"
    >
      <Link href={href}>{title}</Link>
    </Button>
  );
};

export default BackButton;
