import './header.scss'
import React from 'react'

function Header() {
    return (
        <>
        <div className='header'>
            <h2 className='logo' >ubeg</h2>
            <div className='opt'>
              <img src='./bell2.png' style={{objectFit:'contain',height:"30px"}} />
              <img src='./photo.jpg' style={{height:"50px",width:'50px',borderRadius:"50%",marginLeft:'80px'}} />
              <span><h3>Aakarsh</h3></span>
            </div>
        </div>
        </>
    )
}

export default Header
