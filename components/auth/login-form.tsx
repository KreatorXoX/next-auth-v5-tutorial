import React from "react";
import CardWrapper from "./card-wrapper";

type Props = {};

const LoginForm = (props: Props) => {
  return (
    <CardWrapper
      header="Welcome back"
      backButton={{ title: "Dont have an account ?", href: "/auth/register" }}
      showSocial
    >
      LoginForm
    </CardWrapper>
  );
};

export default LoginForm;
