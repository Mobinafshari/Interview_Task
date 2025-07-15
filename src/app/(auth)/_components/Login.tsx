"use client";
import Input from "@/components/Input";
import styles from "../_styles/auth.module.scss";
import Button from "@/components/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import LoginSchema, {
  LoginPayloadType,
} from "../_validations/login.validation";

function Login() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginPayloadType>({
    resolver: zodResolver(LoginSchema),
  });
  const onSubmit = (values: LoginPayloadType) => {
    console.log(values);
  };
  return (
    <form
      className={styles["wrapper__login"]}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        placeholder="Mobile Number"
        type="number"
        {...register("mobile")}
        error={!!errors?.mobile}
        errorText={errors.mobile?.message}
      />
      <Button>Submit</Button>
    </form>
  );
}

export default Login;
