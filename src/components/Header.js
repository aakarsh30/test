import './header.scss'
import React,{useState} from 'react'
import Sidebar from './Sidebar'
function Header() {
    const [sidemenu,setmenu]=useState(false)
    function closing(){
        setmenu(false)
    }
    return (
        <>
        {sidemenu && <Sidebar closefn={closing} />}
        <div className='header'>
            <svg onClick={()=> setmenu(!sidemenu)} className='menubtn'  fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="48px" height="48px"><path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"/></svg>

            <h2 className='logo' >ubeg</h2>
            <div className='opt'>
              <img src='./bell2.png' className='bell'  />
              <img src='./photo.jpg' className='avtar'  />
              <span><h3>Aakarsh</h3></span>
              <img src='./down2.png' style={{height:"25px",objectFit:"initial", marginLeft:"15px",cursor:"pointer"}} />
            </div>
        </div>
        </>
    )
}

export default Header
