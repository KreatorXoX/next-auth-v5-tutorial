import React from "react";

type Props = { children: React.ReactNode };

const AuthLayout = ({ children }: Props) => {
  return (
    <div className="h-full flex flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900">
      {children}
    </div>
  );
};

export default AuthLayout;
