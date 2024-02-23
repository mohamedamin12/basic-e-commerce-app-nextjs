import Image from "next/image";
import styles from "./Footer.module.css";
import { social_item } from "./socialItem";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2024 Hesxashop. All Rights Reserved.</div>
      <div className={styles.social}>
        {social_item.map((social_item) => 
          <Image
          key={social_item.id}
            src={`/images/icon/${social_item.media}.png`}
            className={styles.icon}
            width={20}
            height={20}
            alt={`Hexashop ${social_item.media} link`}
          />
        )}
      </div>
    </div>
  );
};

export default Footer;
