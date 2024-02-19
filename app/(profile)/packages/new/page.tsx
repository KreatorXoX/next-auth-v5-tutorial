"use client";
import { useQuery } from "@tanstack/react-query";
import DataTable from "./_components/data-table";
import SelectCountryForm from "./_components/select-country-form";
import { useState } from "react";
import { getProducts } from "@/lib/get-products";

export default function NewPackagePage() {
  const [country1, setCountry1] = useState("");
  const [country2, setCountry2] = useState("");
  const [products, setProducts] = useState("");

  // const { data, isLoading, isSuccess } = useQuery({
  //   queryKey: ["users"],
  //   queryFn: () => getProducts(country1, country2, products),
  //   enabled: !!country1 && !!country2 && !!products,
  // });
  // console.log(data);
  return (
    <main className="h-full px-10 pt-20 space-y-10">
      <div className="flex items-center gap-5 pt-5">
        <SelectCountryForm
          setCountry1={setCountry1}
          setCountry2={setCountry2}
          setProducts={setProducts}
        />
      </div>
      <DataTable />
    </main>
  );
}
