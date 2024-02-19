import { getProducts } from "@/lib/get-products";
import { useQuery } from "@tanstack/react-query";

export const useProducts = (c1: string, c2: string, asins: string) =>
  useQuery({
    queryKey: ["products"],
    queryFn: getProducts.bind(null, c1, c2, asins),
    enabled: !!c1 && !!c2 && !!asins,
  });
