import React, { useState, useEffect } from 'react';
import styles from './index.module.sass';
// import img1 from './img/img1.jpg';
// import { Button } from '@mui/material';
// import { Link, Outlet } from 'react-router-dom';

// import { useRef } from 'react';
import axios from 'axios';
// import { Nav } from '../nav/nav';
 
export const Cart = () => {
   
  // const divEl = useRef(null);

  // const api = axios.create(
  //   baseUrl : "http://139.144.180.200:3000" ,
  //   Headers : {

  //   }
  // )
  // api.get()
  const [data, setDate] = useState([]);
  const url1 = "http://139.144.180.200:3000/product-info";
  useEffect(() => {
    axios.get(url1)
      .then(function (response) {
        setDate(response.data)
        //  console.log(response.data);
      } , [])
  }
  )
  return ( 
   <>
    <div className={styles.container}>
    {
        data.map((item) =>
<box className={styles.container__box}>
   <img src={`http://139.144.180.200:3000/${'img1.jpg'}`} alt="img1"/>

   <p>Price: ${item.price}</p>
   {/* <Link to="/create"    ref={divEl} > */}
    <button>MORE</button>
    {/* </Link> */}
</box>

        )}
</div>

{/* <Outlet/> */}
   </>
  )
}
