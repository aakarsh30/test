import React,{useState} from 'react';
import Header from './components/Header';
import './styles/App.scss';
import Sidebar from './components/Sidebar';
function App() {

  return (
    <>
      <div className='outer'>
        
        
        <div className='main' >
        <svg className='menubtn'  fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="48px" height="48px"><path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"/></svg>

          <Header />
         
          <div className='firstbox'>
            <div className='title'>
              <h2 className='helo'  >Hello Aakarsh</h2>
              <div className='tools'>
                <div className='frst' >
                  <svg style={{height:"20px"}} fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="48px" height="48px"><path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"/></svg>

                </div>
                <div className='scnd' >
                  <img src='./dots.png' style={{height:"20px",objectFit:"contain"}} />

                </div>
                <div className='plus'>
                  <div className='thrd'>
                    <img src='./plus.png' style={{height:"20px"}} />
                  </div>
                </div>
              </div>

            </div>
            <div className='workout'>
              <div className='schedule'>
                <div className='upcm'>
                  <img src='./running.png' className='run'  />
                  <h2 style={{color:"#3b4a50"}} >Upcoming Workout</h2>
                </div>
                <div className='next'>
                  <span style={{fontWeight:"700"}} >Next Workout in 2 Days</span>
                  <text style={{color:"#a8737b",fontSize:"34px",fontWeight:"900"}}>2 Days</text>
                  <span style={{color:"#0cb459",fontWeight:"700"}} >10:00, 12 Oct 2020</span>
                </div>
                <div className='lower'>
                  <span className='smalltext' >Studio Name and Address</span>
                  <text style={{color:"#a8737b",fontSize:"24px",fontWeight:"700"}}>EMSBuddy Studio</text>
                  <span style={{color:"#3b4a50",fontWeight:"700"}}>D-215, Kavi Nagar, Delhi</span>
                </div>
                <div className='btn'>
                  Workout Schedule
                </div>
              </div>
              <div className='layout'>
                <div className='head'>
                  <div className='upcm'>
                    <img src='./rafiki.png'className='run' />
                    <h1 className='num' >10</h1>
                    <h2 style={{color:"#3b4a50"}} >Remainig Workout</h2>
                  </div>
                </div>
                <div className='btm'>
                  <div className='top'>
                    <text style={{fontSize:"20px",fontWeight:"700",color:"#3b4a50"}}>My Services</text>
                    <img src='./option.png' style={{width:"40px",height:"30px",objectFit:"contain",cursor:"pointer"}} />
                  </div>
                  <span style={{color:"#0cb459",fontWeight:"900",fontSize:"20px",marginTop:"10px"}} >EMS Workout </span>
                  <div className='mid'>
                    <div className='inside'>
                      <span className='smalltext' className='smalltext'>Type</span>
                      <h3>EMS Workout</h3>
                    </div>
                    <div className='inside'>
                      <span className='smalltext'>Expires in</span>
                      <h3 style={{color:"#0cb459"}}>25 Days Left</h3>
                    </div>
                  </div>
                  <div className='mid'>
                    <div className='inside'>
                      <span className='smalltext'>Workout Amount</span>
                      <h3>15</h3>
                    </div>
                    <div className='inside'>
                      <span className='smalltext'>Remainig Workout</span>
                      <h3 style={{color:"#0cb459"}}>5</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className='layout'>
                <div className='head'>
                  <div className='upcm'>
                    <img src='./amico.png' className='run' />
                    <h1 className='num' >5</h1>
                    <h2 style={{color:"#3b4a50"}} >Completed Workout</h2>
                  </div>
                </div>
                <div className='btm'>
                  <div className='top'>
                    <text style={{fontSize:"20px",fontWeight:"700",color:"#3b4a50"}}>Upcoming Payment</text>
                    <img src='./option.png' style={{width:"40px",height:"30px",objectFit:"contain",cursor:"pointer"}} />
                  </div>
                  <span style={{color:"#0cb459",fontWeight:"900",fontSize:"20px",marginTop:"10px"}}>Amount</span>
                  <text style={{color:"#a8737b",fontSize:"34px",fontWeight:"900"}}>$5,500 /- </text>
                  <div className='mid2'>
                    <div className='inside'>
                      <span className='smalltext' className='smalltext'>Left</span>
                      <h3>10 Installments</h3>
                    </div>
                    <div className='inside'>
                      <span className='smalltext'>DeadLine </span>
                      <h3 style={{color:"#0cb459"}}>25 Oct 2020</h3>
                    </div>
                  </div>
                  <div className='paybtn'>
                    Pay Now
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>


      </div>
    </>
  );
}

export default App;
