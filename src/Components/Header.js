import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import Navbar from './Navbar'
const Header = (props) => {
  const[active,setActive]=useState(false);
  const[fakeDAta,SetfakeData]=useState([]);
  const getData=async()=>{
      const storeOfData = await fetch("https://fakestoreapi.com/products");
      const newData=await storeOfData.json();
      console.log(newData);
      SetfakeData(newData);
      // console.log(fakeDAta);
  }
  useEffect(()=>{
    getData();
  },[]);

  const CartFunction=()=>{
    // setCart(cart+1)
        setActive(true);
        if(active)
        {
          // props.cart();
          alert("clickedd")
        }
        else{
            alert("not")
        }
    
  }
  return (
    <>
    {/* {active? props.cart :'not clicked'} */}
        <div className='product'>
               <div className='Single_card'>
                {fakeDAta.map((e,index)=>{
                  // console.log(fakeDAta)
                  return(
                    <>
                     <div className='inner_card' key={index}>
                      <img src={e.image} alt="" />
                       <div><h4> {e.title}</h4></div>
                        <div><h3>price:${e.price}</h3></div>

                        <div className='for_buttons'>
                        <button onClick={CartFunction}>Add in cart</button>
                        <button><Link to={`/viewdetails/${e.id}`}>View Detail</Link></button>
                        </div>
                     </div>
                    </>
                  )
                })}
               </div>
        </div>   
    </>
  )
}

export default Header