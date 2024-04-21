import Footer from '../../components/Footer.jsx';
import '../home.css';
import Btn from '../../components/btn.jsx'
import BtnDesktop from '../../components/btnDesktop.jsx'
import projectSymposium from '../../assets/compressed/projectSymposium.jpg'
import { useState } from 'react';
const Register = ()=>{
const [clicked,setClicked] = useState(false);
return(
<>
{(!clicked)?(<>
<div className="registerContainer">
<span style={{  fontFamily:"jedi",fontSize:"4rem",marginBottom:"3rem"}} className='gradient-text' > register</span>
<div className="eventCard eventCardExp">
             <img class="eventImage"src={projectSymposium} style={{borderRadius:"1rem"}}></img> 
             <div className="eventName">  <span style={{  fontFamily:"jedi",fontSize:"2.5rem"}} className='gradient-text' > Project Symposium</span>   </div>
            
             <div className="eventMisc">
             <span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' > Timing</span> : 10:30 AM 
             <span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' > Teamsize</span> : 4
             <span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' > venue</span> : TEL 101
             </div>
             <div className="eventName">  <span style={{  fontFamily:"jedi",fontSize:"2.2rem"}} className='gradient-text' > fee : </span><span style={{  fontFamily:"jedi",fontSize:"2.2rem"}}>400₹</span>   </div>
            
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
<iframe width="100%" height="100%" style={{border:"none"}} src="https://www.yepdesk.com/embed/buy-tickets/6624db1646e0fb0001c26cf1/private/6ptipoafj"></iframe>
</div>
)}

</>
);

}
export default Register;