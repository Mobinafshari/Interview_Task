"use client";
import { useUser } from "@/context/userContext";
import { redirect, RedirectType } from "next/navigation";
import React, { ReactNode, useLayoutEffect } from "react";
type Props = {
  children: ReactNode;
};

function AuthChecker({ children }: Props) {
  const { user } = useUser();
  useLayoutEffect(() => {
    if (!user) {
      redirect("auth", RedirectType.replace);
    }
  }, [user]);

  if (!user) return null;
  return <>{children}</>;
}

export default AuthChecker;
