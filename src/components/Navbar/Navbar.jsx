
import Link from "next/link";
import styles from "./Navbar.module.css";
import { links } from "./navItem";
import Button from "../Button/Button";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        HEXASHOP
      </Link>
      <div className={styles.links}>
      <DarkModeToggle/>
      {links.map( link =>
          <Link key={link.id} href={link.url} className={styles.link}>{link.title}</Link>
      )}
        <Button/>
      </div>
    </div>
  );
};

export default Navbar;
