import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import { useRef } from 'react';
import styles from './index.module.sass';
import Carousel from 'better-react-carousel';
import img1 from './img/Rectangle 7.png';
import img2 from './img/Rectangle 9.png';
import img3 from './img/Rectangle 10.png';
import img4 from './img/Rectangle 11.png';
import sporty1 from './img/sporty1.jpg';
import sporty2 from './img/sporty2.jpg';
import sporty3 from './img/sporty3.jpg';
import sporty4 from './img/sporty4.jpg';
import hijabi1 from './img/hijabi1.jpg';
import hijabi2 from './img/hijabi2.jpg';
import hijabi3 from './img/hijabi3.jpg';
import hijabi4 from './img/hijabi4.jpg';
import dress1 from './img/dress1.jpg';
import dress2 from './img/dress2.jpg';
import dress3 from './img/dress3.jpg';
import dress4 from './img/dress4.jpg';

export const Access = () => {
  const divEl = useRef(null);
  return ( 
    <>
    <div className={styles.container}>
      <div className={styles.container__shadow}>
        {/* <div className={styles.container__shadow__imgbox}>
        <Link to="/cart"    ref={divEl}><button>BUY NOW</button></Link>
        </div> */}
        <div className={styles.container__shadow__box}>
          <p>Popular</p>
        <Carousel cols={4} rows={1} gap={60} loop >
      <Carousel.Item>
        <img width="100%" src={img1}  alt="img"/>
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={img2}  alt="img"/>
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={img3} alt="img" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={img4} alt="img" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={img1}  alt="img"/>
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={img2}  alt="img"/>
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={img3} alt="img" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={img4} alt="img" />
      </Carousel.Item>
    </Carousel>
    <Link to="/dashboard" ref={divEl} className={styles.container__shadow__box__link}><button variant="contained">BUY NOW</button></Link>
        </div>

        <div className={styles.container__shadow__box}>
          <p>Sporty</p>
        <Carousel cols={4} rows={1} gap={60} loop>
      <Carousel.Item>
        <img width="100%" src={sporty1} alt="img"/>
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={sporty2} alt="img"/>
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={sporty3} alt="img"/>
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={sporty4} alt="img"/>
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={sporty1} alt="img"/>
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={sporty2} alt="img"/>
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={sporty4} alt="img" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={sporty3} alt="img" />
      </Carousel.Item>
    </Carousel>
    <Link to="/dashboard" ref={divEl} className={styles.container__shadow__box__link}><button variant="contained">BUY NOW</button></Link>
        </div>

        <div className={styles.container__shadow__box}>
          <p>For The Party</p>
        <Carousel cols={4} rows={1} gap={60} loop >
      <Carousel.Item>
        <img width="100%" src={dress1}  alt="img"/>
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={dress2}  alt="img"/>
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={dress3} alt="img" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={dress4} alt="img" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={dress1}  alt="img"/>
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={dress2}  alt="img"/>
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={dress3} alt="img" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={dress4} alt="img" />
      </Carousel.Item>
    </Carousel>
    <Link to="/dashboard" ref={divEl} className={styles.container__shadow__box__link}><button variant="contained">BUY NOW</button></Link>
         </div>

        <div className={styles.container__shadow__box}>
          <p>Hijabi dresses</p>
        <Carousel cols={4} rows={1} gap={60} loop >
      <Carousel.Item>
        <img width="100%" src={hijabi1}  alt="img"/>
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={hijabi3}  alt="img"/>
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={hijabi2} alt="img" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={hijabi4} alt="img" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={hijabi1}  alt="img"/>
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={hijabi3}  alt="img"/>
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={hijabi2} alt="img" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={hijabi4} alt="img" />
      </Carousel.Item>
    </Carousel>
    <Link to="/dashboard" ref={divEl} className={styles.container__shadow__box__link}><button variant="contained">BUY NOW</button></Link>
         </div>
      </div>
    </div>
    <Outlet/>
    </>
  )
}
