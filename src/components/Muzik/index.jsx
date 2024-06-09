// components/Musik.js
"use client";

import styles from "./Musik.module.scss";
import proigr from "../../../public/images/proigriv.png";
import Image from "next/image";

export default function Musik() {
  return (
    <button
      className={`${styles.muzik} ${isPlaying ? "animate-spin" : ""}`}
      onClick={play}
    >
      <Image
        className="ml-20"
        height={50}
        width={100}
        src={proigr}
        alt="musik"
      />
    </button>
  );
}
