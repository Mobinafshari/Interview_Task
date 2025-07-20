"use client";
import { useUser } from "@/context/userContext";
import Login from "../_components/Login";
import styles from "../_styles/auth.module.scss";
import { redirect, RedirectType } from "next/navigation";
import {  useLayoutEffect } from "react";

function Auth() {
  const { user } = useUser();
  useLayoutEffect(() => {
    if (user) {
      redirect("dashboard", RedirectType.replace);
    }
  }, [user]);
  return (
    <section className={styles.wrapper}>
      <Login />
    </section>
  );
}

export default Auth;
