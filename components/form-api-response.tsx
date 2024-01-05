import { cn } from "@/lib/utils";
import { Check, X } from "lucide-react";
import React from "react";

type Props = { message?: string; status?: "success" | "error" };

const FormApiResponse = ({ message, status }: Props) => {
  if (!message) return null;

  return (
    <div
      className={cn(
        "flex items-center py-2 px-3 gap-3 font-semibold rounded-lg",
        status === "success"
          ? "bg-green-500/20 text-green-800 "
          : "bg-rose-500/20 text-rose-800 "
      )}
    >
      {status === "success" ? <Check /> : <X />}
      <p>{message}</p>
    </div>
  );
};

export default FormApiResponse;
