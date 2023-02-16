import React,{useState,useEffect} from 'react'
import banner from "./reso/women-header.jpg";
import "./Women.css";
const Women = () => {
  return (
    <>
    <div className='women'>
         <div className='women-header'>
              <img src={banner} alt="banner"/>
         </div>
    </div>
    </>
  )
}

export default Women;
