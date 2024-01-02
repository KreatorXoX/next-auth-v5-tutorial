"use client";

import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import Header from "./header";
import Socials from "./socials";
import BackButton from "./back-button";

type Props = {
  children: React.ReactNode;
  header: string;
  backButton: {
    title: string;
    href: string;
  };
  showSocial?: boolean;
};

const CardWrapper = ({ children, header, backButton, showSocial }: Props) => {
  return (
    <Card className="w-[450px] shadow-md">
      <Header label={header} />
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
          <Socials />
        </CardFooter>
      )}
      <CardFooter>
        <BackButton title={backButton.title} href={backButton.href} />
      </CardFooter>
    </Card>
  );
};

export default CardWrapper;
