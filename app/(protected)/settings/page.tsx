import { auth, signOut } from "@/auth";
import React from "react";

type Props = {};

const SettingsPage = async (props: Props) => {
  const session = await auth();

  return (
    <div>
      SettingsPage
      <p>{JSON.stringify(session)}</p>
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
