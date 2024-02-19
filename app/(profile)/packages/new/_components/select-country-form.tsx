"use client";
import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { CountrySelectSchema, countrySelectSchema } from "@/schemas";
import { MoveRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useProductStore } from "@/hooks/use-product-store";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/lib/get-products";
type Props = {};

const SelectCountryForm = ({}: Props) => {
  const form = useForm<CountrySelectSchema>({
    resolver: zodResolver(countrySelectSchema),
    defaultValues: {
      country1: "",
      country2: "",
      products: "",
    },
  });

  const { addProduct, products: prods } = useProductStore();

  const onSubmitHandler: SubmitHandler<CountrySelectSchema> = async (
    values
  ) => {
    const res = await fetch("/api/products", {
      method: "POST",
      body: JSON.stringify(values),
    });

    const data = await res.json();
    addProduct(data);
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmitHandler)}
        className="w-full md:w-1/2 space-y-5 md:max-w-2xl"
      >
        <div className="flex items-center gap-3">
          <FormField
            control={form.control}
            name="country1"
            render={({ field }) => (
              <FormItem className="w-full">
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Nereden" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="us">Amerika</SelectItem>
                    <SelectItem value="uk">Ingiltere</SelectItem>
                    <SelectItem value="nl">Hollanda</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <MoveRight size={24} className="text-gray-700" />
          <FormField
            control={form.control}
            name="country2"
            render={({ field }) => (
              <FormItem className="w-full">
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Nereye" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="us">Amerika</SelectItem>
                    <SelectItem value="uk">Ingiltere</SelectItem>
                    <SelectItem value="nl">Hollanda</SelectItem>
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex items-center gap-3">
          <FormField
            control={form.control}
            name="products"
            render={({ field }) => (
              <FormItem className="space-y-0 w-full">
                <FormControl>
                  <Input placeholder="Urun Kodu" {...field} />
                </FormControl>
                <FormDescription>{}</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button variant={"submit"} type="submit" className="w-20">
            Ara
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default SelectCountryForm;
