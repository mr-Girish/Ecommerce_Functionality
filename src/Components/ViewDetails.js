import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'

const ViewDetails = () => {
    const [lazyload,Setlazyload]=useState(false);
    const [Sigledatabyid,SetsingledatabyId]=useState({});
    const {id}=useParams();
    // console.log(id);


    const getDataById=async()=>{
        const SingleData=await fetch(`https://fakestoreapi.com/products/${id}`);
        // console.log(SingleData);
        const ChangeFormate= await SingleData.json();
        // console.log(ChangeFormate)
        SetsingledatabyId(ChangeFormate);
        // console.log(ChangeFormate)
    }

    useEffect(()=>{
        getDataById();
    },[]);
  return (
    <div>
        <h1>ViewDetails {id} </h1>
        
        {lazyload ? 
             <>
             <img src={Sigledatabyid.image} alt="loading" />
             <h1>{Sigledatabyid.title}</h1>
             <h1>{Sigledatabyid.price}</h1></>
        : "Loading"}
        
        
   
            
    </div>
  )
}

export default ViewDetails