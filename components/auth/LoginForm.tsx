import { useEffect, useState } from "react";
import styles from "./AuthForm.module.scss";
import { LoginPasswordInput, LoginTextInput } from "./Input";
import { useForm } from "react-hook-form";

interface LoginData {
  email: string;
  password: string;
}

function LoginForm() {
  const [hasAllInput, setHasAllInput] = useState(false);
  const {
    register,
    formState: { errors, dirtyFields },
  } = useForm<LoginData>({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    const noError = Object.keys(errors).length === 0;
    const allFilled = Object.keys(dirtyFields).length === 2;
    setHasAllInput(noError && allFilled);
  }, [
    errors,
    dirtyFields,
    Object.keys(errors).length === 0,
    Object.keys(dirtyFields).length === 2,
  ]);

  return (
    <form className={styles.form}>
      <LoginTextInput
        id="email"
        error={errors?.email?.message}
        register={register}
      />
      <LoginPasswordInput
        id="password"
        error={errors?.password?.message}
        register={register}
      />
      <button className={styles.button} type="submit" disabled={!hasAllInput}>
        로그인
      </button>
    </form>
  );
}

export default LoginForm;
