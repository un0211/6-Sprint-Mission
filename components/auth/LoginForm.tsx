import Image from "next/image";
import styles from "./LoginForm.module.scss";

function LoginForm() {
  return (
    <form className={styles.form}>
      <div>
        <label className={styles.label} htmlFor="email">
          이메일
        </label>
        <input
          className={styles.input}
          type="email"
          id="email"
          placeholder="이메일을 입력해주세요"
          autoComplete="email"
          autoFocus
        />
        <p className={`${styles.warning} ${styles.hidden}`}></p>
      </div>

      <div>
        <label className={styles.label} htmlFor="password">
          비밀번호
        </label>
        <div className={styles.password_wrapper}>
          <input
            className={styles.input}
            type="password"
            id="password"
            placeholder="비밀번호를 입력해주세요"
            autoComplete="current-password"
          />
          <Image
            className={styles.on_off}
            alt="비밀번호 보기"
            src="/icons/invisible.svg"
            width={24}
            height={24}
          />
        </div>
        <p className={`${styles.warning} ${styles.hidden}`}></p>
      </div>

      <button className={styles.button} type="button" disabled>
        로그인
      </button>
    </form>
  );
}

export default LoginForm;
