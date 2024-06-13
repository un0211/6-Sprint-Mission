import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Auth.module.scss";
import LoginForm from "@/components/auth/LoginForm";
import QuickLogin from "@/components/auth/QuickLogin";

function Login() {
  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <Image
            alt="판다마켓 홈"
            src="/images/logo.png"
            width={396}
            height={132}
          />
        </Link>
      </header>

      <main className={styles.main}>
        <LoginForm />
        <QuickLogin />
        <div className={styles.go_signup}>
          <p>판다마켓이 처음이신가요?</p>
          <Link href="/signup">회원가입</Link>
        </div>
      </main>
    </>
  );
}

export default Login;
