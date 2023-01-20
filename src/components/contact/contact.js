import React from 'react'
import styles from './index.module.sass'

export const Contact = () => {
  return (
    <div className={styles.container}>
       <div className={styles.container__box}>
        <ul>
          <li>КОМПАНИЯ</li>
          <li>О нас</li>
          <li>Контакты</li>
        </ul>
       </div>
       <div className={styles.container__box}>
        <ul>
          <li>ПОЛЕЗНОЕ</li>
          <li>Оплата и доставка</li>
          <li>Условия возврата</li>
          <li>Бонусная система</li>
        </ul>
       </div>
       <div className={styles.container__box}>
        <ul>
          <li>ПОКУПАТЕЛЮ</li>
          <li>Избранное</li>
          <li>Публичная оферта</li>
          <li>Политика конфиденциальности</li>
        </ul>
       </div>
       <div className={styles.container__box}>
        <ul>
          <li>КОНТАКТЫ</li>
          <li>+38(073) 096 36 44</li>
          <li>info@dinar.com</li>
        </ul>
       </div>
    </div>
  )
}
