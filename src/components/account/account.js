import React from 'react';
import styles from './index.module.sass';


export const Account = () => {
  return (
    <div className={styles.container}>
        <div className={styles.container__aside}>
            <div className={styles.container__aside__circle}>
            <span class="material-symbols-outlined">face_3</span>
            </div>
            <hr/>
            <p>Name:</p>
            <p>Amail:</p>
        </div>
        <div className={styles.container__main}>
            <div className={styles.container__main__shadow}></div>
        </div>
    </div>
  )
}
