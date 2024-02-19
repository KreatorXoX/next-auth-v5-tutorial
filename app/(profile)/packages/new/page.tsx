"use client";
import { useQuery } from "@tanstack/react-query";
import { DataTable } from "./_components/data-table";
import SelectCountryForm from "./_components/select-country-form";
import { useEffect, useState } from "react";
import { getProducts } from "@/lib/get-products";
import { columns } from "./_components/columns";
import { useProducts } from "@/hooks/use-products";
import { useProductStore } from "@/hooks/use-product-store";

export default function NewPackagePage() {
  const { products } = useProductStore();
  return (
    <main className="h-full px-10 pt-20 space-y-10">
      <div className="flex items-center gap-5 pt-5">
        <SelectCountryForm />
      </div>
      <div className="mx-auto px-5 w-full">
        {products && <DataTable columns={columns} data={products} />}
      </div>
    </main>
  );
}
