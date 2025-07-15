"use client";
import React, { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.scss";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isLoading?: boolean;
  isDisabled?: boolean;
};

const Button = ({
  children,
  className = "",
  isLoading,
  isDisabled,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`${styles.button} ${className}`}
      {...props}
      disabled={isDisabled || isLoading}
    >
      {isLoading ? "Loading..." : children}
    </button>
  );
};

export default Button;
