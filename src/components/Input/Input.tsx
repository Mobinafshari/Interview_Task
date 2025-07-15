import React from "react";
import styles from "./Input.module.scss";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  error?: boolean;
  errorText?: string;
};

const Input = ({
  error = false,
  errorText = "",
  className = "",
  ...props
}: InputProps) => {
  return (
    <div className={`${styles.wrapper} ${className}`}>
      <input
        className={styles.input}
        style={{ borderColor: error ? "red" : "#ccc" }}
        {...props}
      />
      {error && <span className={styles.errorText}>{errorText}</span>}
    </div>
  );
};

export default Input;
