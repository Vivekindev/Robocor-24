
import './home.css';
import Btn from './btn.jsx'
import BtnDesktop from './btnDesktop.jsx'
import byteWars from './assets/compressed/bytewars.jpg'
import { useState } from 'react';
const Register = ()=>{
const [clicked,setClicked] = useState(false);
return(
<>
{(!clicked)?(
<div className="registerContainer">
<span style={{  fontFamily:"jedi",fontSize:"4rem"}} className='gradient-text' > register</span>
<div className="eventCard">
             <img class="eventImage"src={byteWars} style={{borderRadius:"1rem"}}></img> 
             <div className="eventName">  <span style={{  fontFamily:"jedi",fontSize:"2.2rem"}} className='gradient-text' > ByteWars</span>   </div>
            
             <div className="eventMisc">
             <span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' > Timing</span> : 10:30 AM 
             <span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' > Teamsize</span> : 2
             <span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' > venue</span> : TEL 101
             </div>
             <div className="eventName">  <span style={{  fontFamily:"jedi",fontSize:"2.2rem"}} className='gradient-text' > fee : </span><span style={{  fontFamily:"jedi",fontSize:"2.2rem"}}>150₹</span>   </div>
            
            <div onClick={()=>setClicked(true)}> {(window.innerWidth>700) ? (<BtnDesktop data="Proceed to Checkout"/>) : (<Btn data="Proceed to Checkout"/>)}</div>
           </div>
 </div>

):(
           <div style={{
width:"100%",
height:"100vh",
backgroundColor:"#110302"
}}>
<iframe width="100%" height="100%" style={{border:"none"}} src="https://www.yepdesk.com/embed/buy-tickets/6620d34946e0fb0001adb86f/private/a42cdaahsl"></iframe>
</div>
)}

</>
);

}
export default Register;