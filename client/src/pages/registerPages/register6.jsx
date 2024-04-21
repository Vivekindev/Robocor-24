import Footer from '../../components/Footer.jsx';
import '../home.css';
import Btn from '../../components/btn.jsx'
import BtnDesktop from '../../components/btnDesktop.jsx'

import { useState } from 'react';
const Register = ()=>{
const [clicked,setClicked] = useState(false);
return(
<>
{(!clicked)?(<>
<div className="registerContainer">
<span style={{  fontFamily:"jedi",fontSize:"4rem",marginBottom:"3rem"}} className='gradient-text' > register</span>
<div className="eventCard eventCardExp">
             <img class="eventImage"src="https://content.instructables.com/FQ4/JS4F/JIKJZG1J/FQ4JS4FJIKJZG1J.jpg?auto=webp&frame=1&width=840&height=1024&fit=bounds&md=3ed8980f9bb925d6ce5c348a02f3708e" style={{borderRadius:"1rem"}}></img> 
             <div className="eventName">  <span style={{  fontFamily:"jedi",fontSize:"2.5rem"}} className='gradient-text' > Arduino Craft</span>   </div>
            
             <div className="eventMisc">
             <span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' > Timing</span> : 10:30 AM 
             <span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' > Teamsize</span> : 3
             <span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' > venue</span> : TEL 101
             </div>
             <div className="eventName">  <span style={{  fontFamily:"jedi",fontSize:"2.2rem"}} className='gradient-text' > fee : </span><span style={{  fontFamily:"jedi",fontSize:"2.2rem"}}>200₹</span>   </div>
            
            <div onClick={()=>setClicked(true)}> {(window.innerWidth>700) ? (<BtnDesktop data="Proceed to Checkout"/>) : (<Btn data="Proceed to Checkout"/>)}</div>
           </div>
 </div>
 <div id="footer"className="foot"><Footer/></div>
 </>
):(
           <div style={{
width:"100%",
height:"100vh",
backgroundColor:"#110302"
}}>
<iframe width="100%" height="100%" style={{border:"none"}} src="https://www.yepdesk.com/embed/buy-tickets/6624265a46e0fb0001bfe80d/private/cj3ebh2tnf"></iframe>
</div>
)}

</>
);

}
export default Register;