"use client";
import React, { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.scss";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isLoading?: boolean;
};

const Button = ({
  children,
  className = "",
  isLoading,
  ...props
}: ButtonProps) => {
  return (
    <button className={`${styles.button} ${className}`} {...props}>
      {isLoading ? "Loading..." : children}
    </button>
  );
};

export default Button;
