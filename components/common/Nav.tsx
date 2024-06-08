import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Nav.module.scss";
import { useDevice } from "@/lib/DeviceContext";
import Device from "@/constants/device";

function Nav() {
  const device = useDevice();

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link href="/">
          {device === Device.Mobile ? (
            <Image
              alt="판다마켓 로고"
              src="/images/logo_text.png"
              width="81"
              height="40"
            />
          ) : (
            <Image
              alt="판다마켓 로고"
              src={"/images/logo.png"}
              width="153"
              height="51"
            />
          )}
        </Link>
        <ul className={styles.menu}>
          <li>
            <Menu path="/freeboard" menu="자유게시판" />
          </li>
          <li>
            <Menu path="/items" menu="중고마켓" />
          </li>
        </ul>
      </div>
      <Link className={`button ${styles.login_button}`} href="/login">
        로그인
      </Link>
    </nav>
  );
}

function Menu({ path, menu }: { path: string; menu: string }) {
  const router = useRouter();

  const linkStyle = {
    color: path === router.pathname ? "var(--point-blue)" : "#4b5563",
  };

  return (
    <Link href={path} style={linkStyle}>
      {menu}
    </Link>
  );
}

export default Nav;
