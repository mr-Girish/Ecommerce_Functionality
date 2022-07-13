import React, { Suspense } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import Navbar from './Navbar'
const Header = (props) => {
  const[active,setActive]=useState(true);
  const[fakeDAta,SetfakeData]=useState([]);
  const[cartStore,setcartStore]=useState([]);
  const[loading, setLoading] = useState(false);
  const getData=async()=>{
    setLoading(true)
      const storeOfData = await fetch("https://fakestoreapi.com/products");
      const newData=await storeOfData.json();
      // console.log(newData);
      SetfakeData(newData);
      // console.log(fakeDAta);
    setLoading(false)

  }
  useEffect(()=>{
    
    getData();
  },[]);

  const CartFunction=(event)=>{
    
        
          if(active){
          cartStore.push(event)
          setcartStore(cartStore)
          console.log(cartStore)
          }
          else{
            
          }
          cartStore.map((e,index)=>{
            console.log(e.id)
            return(
              <>
                <h1>{e.id}</h1>
              </>
            )
      })
          console.log(event.id)
          props.cart();
       
       
    
  }
  return (
    <>   
       {loading?"Loading............" :
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
                        <button onClick={()=>CartFunction(e)}>Add in cart</button>
                        <Suspense fallback={"Working "}>
                        <button>
                          <Link to={`/viewdetails/${e.id}`}>View Detail</Link>
                        </button>
                        </Suspense>
                        </div>
                     </div>
                    </>
                  )
                })}
               </div>
        </div>
}   
    </>
  )
}

export default Header