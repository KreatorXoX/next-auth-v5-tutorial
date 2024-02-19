"use client";

import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<TableProduct>[] = [
  {
    accessorKey: "asin",
    header: "ASIN",
  },
  {
    accessorKey: "img",
    header: "IMG",
    cell: ({ row }) => {
      return (
        <img
          src={row.original.img}
          alt={row.original.title}
          className="w-[20rem] object-fill"
        />
      );
    },
  },
  {
    accessorKey: "title",
    header: "URUN ISMI",
    cell: ({ row }) => {
      return (
        <div className="flex flex-col">
          <span className="text-xs line-clamp-2">{row.original.title}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "dimensions",
    header: "OLCULER",
    cell: ({ row }) => {
      const height = row.original.dimensions?.height;
      const width = row.original.dimensions?.width;
      const length = row.original.dimensions?.length;
      const weight = row.original.dimensions?.weight;
      const weight_unit = row.original.dimensions?.weight_unit;
      const length_unit = row.original.dimensions?.length_unit;
      return (
        <div className=" text-xs flex flex-col gap-2">
          <div className="flex items-center">
            <span>{height?.toFixed(2)}</span>x<span>{width?.toFixed(2)}</span>x
            <span>{length?.toFixed(2) + " "} </span>
            <span>{length_unit}</span>
          </div>
          <span>
            {weight?.toFixed(2)} {weight_unit}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "seller_count",
    header: "SATICI",
    cell: ({ row }) => {
      const seller1 = row.original.seller_count?.c1 || 0;
      const seller2 = row.original.seller_count?.c2 || 0;

      const c1 = row.original.prices?.c1?.country;
      const c2 = row.original.prices?.c2?.country;

      return (
        <div className="flex flex-col truncate">
          <p className="flex items-center gap-1">
            <span>{c1?.toUpperCase()} :</span>
            <span>{seller1}</span>
          </p>
          <p className="flex items-center gap-1">
            <span>{c2?.toUpperCase()} :</span>
            <span>{seller2}</span>
          </p>
        </div>
      );
    },
  },
  {
    accessorKey: "fba_fee",
    header: "FBA_FEE",
    cell: ({ row }) => {
      const curr1 = row.original.prices?.c1?.currency;
      const curr2 = row.original.prices?.c2?.currency;
      const c1 = row.original.prices?.c1?.country;
      const c2 = row.original.prices?.c2?.country;
      return (
        <div className=" flex flex-col gap-2">
          <p className="flex gap-1 items-center truncate">
            <span>{c1?.toUpperCase()} :</span>
            <span>{row.original.fba_fee?.c1}</span>
            <span className="text-xs">{curr1}</span>
          </p>
          <p className="flex gap-1 items-center truncate">
            <span>{c2?.toUpperCase()} :</span>
            <span>{row.original.fba_fee?.c2 || "-"}</span>
            <span className="text-xs">{curr2}</span>
          </p>
        </div>
      );
    },
  },
  {
    accessorKey: "prices",
    header: "FIYAT",
    cell: ({ row }) => {
      const c1_curr = row.original.prices?.c1?.currency;
      const c2_curr = row.original.prices?.c2?.currency;
      const c1_price = row.original.prices?.c1?.price;
      const c2_price = row.original.prices?.c2?.price;
      const c1 = row.original.prices?.c1?.country;
      const c2 = row.original.prices?.c2?.country;

      return (
        <div className=" flex flex-col gap-2">
          <p className="flex gap-1 items-center truncate">
            <span>{c1?.toUpperCase()} :</span>
            <span>{c1_price}</span>
            <span className="text-xs">{c1_curr}</span>
          </p>
          <p className="flex gap-1 items-center truncate">
            <span>{c2?.toUpperCase()} :</span>
            <span>{c2_price}</span>
            <span className="text-xs">{c2_curr}</span>
          </p>
        </div>
      );
    },
  },
  {
    accessorKey: "price_90avg",
    header: "90_AVG",
  },
  {
    accessorKey: "karlilik",
    header: "KARLILIK",
  },
  {
    accessorKey: "miktar",
    header: "MIKTAR",
  },
];
