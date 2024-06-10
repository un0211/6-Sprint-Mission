import { ORDER_MESSAGE, Order } from "@/constants/boards";
import styles from "./Dropdown.module.scss";
import Image from "next/image";
import { useState } from "react";

function Dropdown({
  order,
  onOrderChange,
}: {
  order: Order;
  onOrderChange: (o: Order) => void;
}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className={styles.dropdown}>
      <button className={styles.button}>
        <span>{ORDER_MESSAGE[order]}</span>
        <Image
          src="/boards/arrow_down.svg"
          alt="드롭다운"
          width={24}
          height={24}
        />
      </button>
      {isDropdownOpen && (
        <ul className={styles.menus}>
          <li
            className={styles.menu}
            onClick={() => onOrderChange(Order.Recent)}
          >
            최신순
          </li>
          <li className={styles.menu} onClick={() => onOrderChange(Order.Like)}>
            좋아요순
          </li>
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
