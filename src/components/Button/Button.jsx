"use client";
import styles from "./Button.module.css";
const Button = () => {
  return (
    <div>
      <button
        className={styles.logout}
        onClick={() => {
          console.log("logout");
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Button;
