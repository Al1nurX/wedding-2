"use client";

import React, { useState, useEffect } from "react";
import styles from "./date.module.scss";

function DateComponent() {
  const [remainingTime, setRemainingTime] = useState(calculateRemainingTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime(calculateRemainingTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function calculateRemainingTime() {
    const date = new Date(2024, 8,2);
    const difference = date.getTime() - new Date().getTime();

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  return (
    <div className={`${styles.container} mx-6 rounded-xl mt-4`}>
      <div className={styles.timeRow}>
        <div className={styles.timeItem}>
          <span className={styles.time}>{remainingTime.days}</span>
          <span className={styles.label}>күн</span>
        </div>
        <div className={styles.timeItem}>
          <span className={styles.time}>{remainingTime.hours}</span>
          <span className={styles.label}>сағат</span>
        </div>
        <div className={styles.timeItem}>
          <span className={styles.time}>{remainingTime.minutes}</span>
          <span className={styles.label}>минут</span>
        </div>
        <div className={styles.timeItem}>
          <span className={styles.time}>{remainingTime.seconds}</span>
          <span className={styles.label}>секунд</span>
        </div>
      </div>
    </div>
  );
}

export default DateComponent;
