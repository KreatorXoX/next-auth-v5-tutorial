import LoginButtonWrapper from "@/components/auth/login-button-wrapper";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LockKeyhole } from "lucide-react";
import { Playfair_Display } from "next/font/google";

const font = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});
export default function Home() {
  return (
    <main
      className={cn(
        "h-full flex flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900",
        font.className
      )}
    >
      <div className="space-y-10 text-center">
        <div className="text-5xl font-bold drop-shadow-lg text-white flex items-center gap-4 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text">
          <LockKeyhole size={40} className="text-rose-500" />
          <h1>Auth Tutorial</h1>
        </div>
        <p className="text-xl text-white">
          Fully functional NextAuth v5 authentication{" "}
        </p>
        <LoginButtonWrapper>
          <Button size={"lg"} variant={"outline"} className="text-xl">
            Sign in
          </Button>
        </LoginButtonWrapper>
      </div>
    </main>
  );
}
