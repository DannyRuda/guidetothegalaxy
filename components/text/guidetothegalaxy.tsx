import Image from "next/image";
import * as React from "react";
import styles from "./guidetothegalaxy.module.scss";

export default function guidetothegalaxy() {
  return (
    <div className={styles.container}>
      <h1 className={styles.headline}>The Guide to the Galaxy <span className={styles.book}>📖</span></h1>
    </div>
  );
}
