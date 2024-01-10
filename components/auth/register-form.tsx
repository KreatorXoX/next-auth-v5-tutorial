"use client";
import React, { useState, useTransition } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { RegisterSchema, registerSchema } from "@/schemas";

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
import FormResponse from "@/components/form-response";
import CardWrapper from "@/components/auth/card-wrapper";
import { register } from "@/actions/register";

type Props = {};

const Registerform = (props: Props) => {
  const [response, setResponse] = useState<{
    status: "success" | "error" | undefined;
    message: string | undefined;
  }>({ status: undefined, message: undefined });

  const [isPending, startTransition] = useTransition();
  const registerform = useForm<RegisterSchema>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },

    resolver: zodResolver(registerSchema),
  });

  const onSubmitHandler: SubmitHandler<RegisterSchema> = (values) => {
    startTransition(() => {
      register(values).then((response) => {
        return setResponse(response);
      });
    });
  };

  return (
    <CardWrapper
      header="Create new account"
      backButton={{ title: "Already have an account ?", href: "/auth/login" }}
      showSocial
    >
      <Form {...registerform}>
        <form
          onSubmit={registerform.handleSubmit(onSubmitHandler)}
          className="space-y-5"
        >
          <div className="space-y-4">
            <FormField
              control={registerform.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="John Doe"
                      type="text"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={registerform.control}
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
              control={registerform.control}
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
            <FormField
              control={registerform.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
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
          <FormResponse status={response.status} message={response.message} />
          <Button
            disabled={isPending}
            type="submit"
            className="w-full"
            size={"sm"}
          >
            Register
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};

export default Registerform;
