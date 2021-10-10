import React,{useState} from 'react'
import './sidebar.scss';
const Icon=({image,bgcolor,...props})=>{
    return(
        <div {...props} style={{backgroundColor:`${bgcolor}`}} className='icon'>
            <img src={image} style={{objectFit:'contain',height:'25px'}} />
        </div>
    )
}
function Sidebar({closefn}) {
    const [clr,setclr]=useState({
        frst:true,
        scnd:false,
        thrd:false
    });
    
    return (
        <>
        <div className='sidebar'  >
            <svg onClick={closefn} style={{height:"40px",marginLeft:"20px",marginBottom:"50px",cursor:"pointer"}} fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="48px" height="48px"><path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"/></svg>
            <Icon image='./home.png' bgcolor={clr.frst?'#0CB459':'transparent'} onClick={()=> {setclr({frst:true,scnd:false,thrd:false})}} />
            <Icon image='./calendar.png' bgcolor={clr.scnd?'#0CB459':'transparent'} onClick={()=> {setclr({frst:false,scnd:true,thrd:false})}} />
            <Icon image='./settings.png' bgcolor={clr.thrd?'#0CB459':'transparent'} onClick={()=> {setclr({frst:false,scnd:false,thrd:true})}} />
            <div className='exit'>
                <img src='./logout.png' style={{height:"25px",objectFit:"contain"}} />
            </div>
        </div>
        </>
    )
}

export default Sidebar
