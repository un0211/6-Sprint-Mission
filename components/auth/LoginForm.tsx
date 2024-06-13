import styles from "./AuthForm.module.scss";
import { Input, PasswordInput } from "./Input";

function LoginForm() {
  return (
    <form className={styles.form}>
      <Input
        label="이메일"
        id="email"
        type="email"
        autoComplete="email"
        placeholder="이메일을 입력해주세요"
      />

      <PasswordInput
        label="비밀번호"
        id="password"
        placeholder="비밀번호를 입력해주세요"
      />

      <button className={styles.button} type="button" disabled>
        로그인
      </button>
    </form>
  );
}

export default LoginForm;
