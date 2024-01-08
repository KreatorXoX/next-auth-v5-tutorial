import { signOut } from "@/auth";
import React from "react";

type Props = {};

const SettingsPage = async (props: Props) => {
  return (
    <div>
      SettingsPage
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button type="submit">sign out</button>
      </form>
    </div>
  );
};

export default SettingsPage;
