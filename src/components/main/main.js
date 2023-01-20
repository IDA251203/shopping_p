import React from 'react';
import styles from './index.module.sass';
import { Categories } from '../categories/categories';
import { Contact } from '../contact/contact';

import { Link } from 'react-scroll';
import { Access } from '../access/access';

export const Main = () => {
  return ( 
    <>
      <div className={styles.main}>
        <div className={styles.shadow}>
            
            <div className={styles.box}>
              <h2>Новая коллекция</h2>
              <hr/>
              <p>Смотреть Новинки</p>
               
               <Link to="categories">
               <div className={styles.circle}>
                   <span class="material-symbols-outlined">arrow_downward</span>
               </div>
               </Link>
            </div>
        </div>
      </div>
      <section id="categories"><Categories/></section>
      <Access/>
      <Contact/>
    </>
  )
}
