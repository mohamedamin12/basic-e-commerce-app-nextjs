import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

async function getData(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const Post = async ({ params }) => {
  const product = await getData(params.id);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.info}>
          <h1 className={styles.title}>{product.title}</h1>
          <p className={styles.desc}>{product.description}</p>
        </div>
        <div className={styles.imageContainer}>
          <Image
            className={styles.postImage}
            src={product.thumbnail}
            alt="post image"
            fill={true}
          />
          <span className={styles.author}>{product.category}</span>
        </div>
      </header>

      <div className={styles.content}>
        <div className={styles.gallery}>
          {product.images.map((image) => (
            <Image
              key={product.id}
              src={image}
              width={200}
              height={200}
              alt={product.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Post;
