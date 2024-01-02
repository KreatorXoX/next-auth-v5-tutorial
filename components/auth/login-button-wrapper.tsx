"use client";

import { useRouter } from "next/navigation";

type Props = {
  children: React.ReactNode;
  mode?: "link" | "modal";
  asChild?: boolean;
};

const LoginButtonWrapper = ({ children, mode = "link", asChild }: Props) => {
  const router = useRouter();

  const onClick = () => {
    router.push("/auth/login");
  };

  if (mode === "modal") {
    return <div>{/* TODO : modal implementation */} TODO </div>;
  }
  return (
    <div onClick={onClick} className="cursor-pointer">
      {children}
    </div>
  );
};

export default LoginButtonWrapper;
