import React from 'react'
import './sidebar.scss';
const Icon=({image})=>{
    return(
        <div className='icon'>
            <img src={image} style={{objectFit:'contain',height:'25px'}} />
        </div>
    )
}
function Sidebar() {
    return (
        <>
        <div className='sidebar'>
            <svg style={{height:"40px",marginLeft:"20px",marginBottom:"50px",cursor:"pointer"}} fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="48px" height="48px"><path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"/></svg>
            <Icon image='./home.png' />
            <Icon image='./calendar.png' />
            <Icon image='./settings.png' />
            <div className='exit'>
                <img src='./logout.png' style={{height:"25px",objectFit:"contain"}} />
            </div>
        </div>
        </>
    )
}

export default Sidebar
