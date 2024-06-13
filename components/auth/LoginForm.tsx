import Image from "next/image";
import styles from "./LoginForm.module.scss";

function LoginForm() {
  return (
    <form id={styles.form}>
      <label className={styles.label} htmlFor="email">
        이메일
      </label>
      <div className={styles.input_container}>
        <input
          className={styles.input}
          type="email"
          id="email"
          placeholder="이메일을 입력해주세요"
          autoComplete="email"
          autoFocus
        />
        <p className={styles.warning}></p>
      </div>

      <label className={styles.label} htmlFor="password">
        비밀번호
      </label>
      <div className={styles.password_container}>
        <input
          className={styles.input}
          type="password"
          id="password"
          placeholder="비밀번호를 입력해주세요"
          autoComplete="current-password"
        />
        <p className={styles.warning}></p>
        <Image
          className={styles.on_off}
          alt="비밀번호 보기"
          src="/icons/invisible.svg"
          width={24}
          height={24}
        />
      </div>

      <button className={styles.button} type="button" disabled>
        로그인
      </button>
    </form>
  );
}

export default LoginForm;
