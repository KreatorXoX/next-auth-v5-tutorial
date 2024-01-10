import { AlertCircle } from "lucide-react";

import CardWrapper from "./card-wrapper";

type Props = {};

const ErrorCard = (props: Props) => {
  return (
    <CardWrapper
      header="Opss!! Something went wrong"
      backButton={{ title: "Back to Login", href: "/auth/login" }}
    >
      <div className="w-full flex justify-center">
        <AlertCircle className="text-destructive" />
      </div>
    </CardWrapper>
  );
};

export default ErrorCard;
