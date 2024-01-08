"use client";
import React, { useState, useTransition } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { login } from "@/actions/login";
import { LoginSchema, loginSchema } from "@/schemas";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import FormApiResponse from "@/components/form-api-response";
import CardWrapper from "@/components/auth/card-wrapper";

type Props = {};

const LoginForm = (props: Props) => {
  const [response, setResponse] = useState<
    | {
        status: "success" | "error" | undefined;
        message: string | undefined;
      }
    | undefined
  >({ status: undefined, message: undefined });

  const [isPending, startTransition] = useTransition();

  const loginForm = useForm<LoginSchema>({
    defaultValues: {
      email: "",
      password: "",
    },

    resolver: zodResolver(loginSchema),
  });

  const onSubmitHandler: SubmitHandler<LoginSchema> = (values) => {
    startTransition(() => {
      login(values).then((response) => {
        return setResponse(response);
      });
    });
  };

  return (
    <CardWrapper
      header="Welcome back"
      backButton={{ title: "Dont have an account ?", href: "/auth/register" }}
      showSocial
    >
      <Form {...loginForm}>
        <form
          onSubmit={loginForm.handleSubmit(onSubmitHandler)}
          className="space-y-5"
        >
          <div className="space-y-4">
            <FormField
              control={loginForm.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="johndoe@example.com"
                      type="email"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={loginForm.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="********"
                      type="password"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormApiResponse
            status={response?.status}
            message={response?.message}
          />
          <Button
            disabled={isPending}
            type="submit"
            className="w-full"
            size={"sm"}
          >
            Login
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};

export default LoginForm;
