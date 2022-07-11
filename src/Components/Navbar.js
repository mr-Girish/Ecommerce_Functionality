import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header'

const Navbar = () => {
    const[updatedCart,setupdatedCArt]=useState(0);
    const CartVal=()=>{
        setupdatedCArt(updatedCart+1);
    }
  return (
    <>
        <div className='Navbar'>
            <div className='logo_side'>
                <h2>SHOPPING SITE</h2>
            </div>
            <div className='cart_side'>
                <div className='inner_side'>
                <div className='right_side'><Link to='/cart'><h2>CART({updatedCart})</h2></Link></div>
               <div className='right_side'> <h2>Login</h2></div>
               <div className='right_side'> <h2>Singup</h2></div>
                </div>
            </div>
        </div>
      
       
       <div className='head'>
       <Header  cart={CartVal}  />
       </div>
       <div className='foot'>
       <Footer/>
       </div>
    </>
  )
}

export default Navbar