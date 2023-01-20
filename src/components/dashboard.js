import { useEffect, useState } from 'react';
import styles from './dashboard.module.sass';
import AuthUser from './AuthUser';

import axios from 'axios';

export default function Dashboard() {
    const {http} = AuthUser();
    const [userdetail,setUserdetail] = useState('');

    useEffect(()=>{
        fetchUserDetail();
    },[]);

    const fetchUserDetail = () =>{
        http.post('/').then((res)=>{
            setUserdetail(res.data);
        });
    }
    const [data, setDate] = useState([]);
    const url1 = "http://139.144.180.200:3000/product-info";
    useEffect(() => {
      axios.get(url1)
        .then(function (response) {
          setDate(response.data)
          //  console.log(response.data);
        } , [])
        axios.create()
    }
    )
    function SendBuyMessage(){
        
    }
    function renderElement(){
        
            return(
   <div className={styles.container}>

           
     
        <div className={styles.container__main}>
        {
        data.map((item) =>
        
        <div className={styles.container__main__box}>
           <div className={styles.container__main__box__imgbox}>
           <img src={`http://139.144.180.200:3000/img/`+item.image} alt="img1"/>
           </div>

           <div className={styles.container__main__box__textbox}>
           <p>Price: ${item.price}</p>
           <p className={styles.container__main__box__textbox__text}><b>Name: {item.name}</b></p>
           <p className={styles.container__main__box__textbox__text}>Size: {item.size}</p>
           <p className={styles.container__main__box__textbox__text}>Place: {item.place}</p>
           <p className={styles.container__main__box__textbox__text}>Phone: {item.phone}</p>
           <button className={styles.container__main__box__textbox__btn} id={item.id} onClick={SendBuyMessage()}> 
              <span className="material-symbols-outlined">shopping_cart_checkout</span>
           </button>
           </div>
        </div>
           
         )}


        </div>
                
            </div>);
        

    }

    return(
        <div>
            { renderElement() }
        </div>
    )
}