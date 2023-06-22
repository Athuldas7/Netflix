import React from 'react'
import './Navbar.css'
import { useState,useEffect} from 'react'

function Navbar() {

    const {show,handleShow}=useState(false)

    useEffect(()=>{
        // to check events happen or not
        window.addEventListener('scroll',()=>{
            if(window.scrollY>450){
                handleShow(true)
            }
            else{
                handleShow(false)
            }
        })


    })

  return (
    <div className={`nav ${show && 'nav_black'}`}>
        <img className='logo'
      src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
      />
    </div>
  )
}

export default Navbar
