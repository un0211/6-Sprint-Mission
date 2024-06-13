import Image from "next/image";
import styles from "./AuthForm.module.scss";

export function Input({
  label,
  id,
  placeholder,
  type,
  autoComplete,
}: {
  label: string;
  id: string;
  placeholder: string;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <input
        className={styles.input}
        type={type || "text"}
        id={id}
        placeholder={placeholder}
        autoComplete={autoComplete || "off"}
        autoFocus
      />
      <p className={`${styles.warning} ${styles.hidden}`}></p>
    </div>
  );
}

export function PasswordInput({
  label,
  id,
  placeholder,
}: {
  label: string;
  id: string;
  placeholder: string;
}) {
  return (
    <div>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <div className={styles.password_wrapper}>
        <input
          className={styles.input}
          type="password"
          id={id}
          placeholder={placeholder}
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
  );
}
