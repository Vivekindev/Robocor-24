//project symposium
import Footer from '../../components/Footer.jsx';
import './register.css';
import Btn from '../../components/btn.jsx'
import handleDownload from '../../functions/handleDownload.jsx';
import BtnDesktop from '../../components/btnDesktop.jsx'
import projectSymposium from '../../assets/compressed/projectSymposium.jpg'
import { useState } from 'react';
const Register = ()=>{
const [clicked,setClicked] = useState(false);
const [iframe,setIframe] = useState(false);
return(
<>
{(!clicked)?(<>

{(window.innerWidth>700)?(
<>
<div className="registerContainer_event">
<span style={{  fontFamily:"jedi",fontSize:"4rem",marginBottom:"2rem"}} className='gradient-text' > register</span>
<div className="eventCard_event">
         
             <div id="left"> <img class="eventImage_event"src={projectSymposium} style={{borderRadius:"1rem"}}></img></div>
            
             <div id="right"> 
             <div className="rightTop">
             <div className="eventName_event">  <span style={{  fontFamily:"jedi",fontSize:"3rem"}} className='gradient-text' > project symposium </span>   </div>
            
             <div className="eventMisc_event" style={{marginBottom:"2rem"}}>
             <span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' > timing</span> <span style={{ fontSize:"1.1rem"}}>: 10:30 AM </span>
             <span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' > venue</span> <span style={{ fontSize:"1.1rem"}}> : Seminar Hall Chemical Dept.</span>
             <span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' > teamsize</span> <span style={{ fontSize:"1.1rem"}}> : 4</span> 
             <span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' > minimum</span> <span style={{ fontSize:"1.1rem"}}> : 2</span>
             </div>
             <span style={{  fontFamily:"jedi",fontSize:"2rem"}} className='gradient-text' >event rules : </span>
             <div className="eventRules">
               
              <ul>
                <li> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos veritatis, voluptatem iure tenetur quam eveniet debitis quas cupiditate dolorem cum!</li>
                <li> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos veritatis, voluptatem iure tenetur quam eveniet debitis quas cupiditate dolorem cum!</li>
                <li> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos veritatis, voluptatem iure tenetur quam eveniet debitis quas cupiditate dolorem cum!</li>
                <li> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos veritatis, voluptatem iure tenetur quam eveniet debitis quas cupiditate dolorem cum!</li>
                <li> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos veritatis, voluptatem iure tenetur quam eveniet debitis quas cupiditate dolorem cum!</li>
                <li> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos veritatis, voluptatem iure tenetur quam eveniet debitis quas cupiditate dolorem cum!</li>

             </ul>  
             </div>
         </div>        
             <div className="rightBottom">
             <div className="eventName_event">  <span style={{  fontFamily:"jedi",fontSize:"2rem"}} className='gradient-text' > fee : </span><span style={{  fontFamily:"jedi",fontSize:"2rem"}}>400₹</span>   </div>
            <div style={{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
            <div onClick={()=>handleDownload('rulebook.pdf')} > {(window.innerWidth>700) ? (<BtnDesktop data="Rule Book"/>) : (<Btn data="Rule Book"/>)}</div>
            <div onClick={()=>setClicked(true)}> {(window.innerWidth>700) ? (<BtnDesktop data="Proceed to Checkout"/>) : (<Btn data="Proceed to Checkout"/>)}</div> 
            </div>
            </div>

            </div>
           </div>
 </div>
 <div id="footer"className="foot"><Footer/></div>
 </>

):(

<>
<div className="registerContainer_Int">
<span style={{  fontFamily:"jedi",fontSize:"4rem",marginBottom:"0rem"}} className='gradient-text' > register</span>


    <div className="eventCard_Int">
             <img class="eventImage_Int"src={projectSymposium} style={{borderRadius:"1rem"}}></img> 
             <div className="eventName_Int">  <span style={{  fontFamily:"jedi",fontSize:"2.5rem"}} className='gradient-text' > project symposium</span>   </div>
            
             <div className="eventMisc_Int">
             <span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' > timing</span> <span style={{ fontSize:"1.1rem"}}>: 10:30 AM </span>
             <span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' > venue</span> <span style={{ fontSize:"1.1rem"}}> : Seminar Hall Chemical Dept.</span><br></br>
             <span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' > teamsize</span> <span style={{ fontSize:"1.1rem"}}> : 4</span> 
             <span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' > minimum</span> <span style={{ fontSize:"1.1rem"}}> : 2</span>
             </div>
             <div className="eventName_Int">  <span style={{  fontFamily:"jedi",fontSize:"2rem"}} className='gradient-text' >event rules : </span>   </div>
 
             
             <div className="eventRules" style={{marginLeft:"1.2rem"}}>
               
               <ul>
               <li> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos veritatis, voluptatem iure tenetur quam eveniet debitis quas cupiditate dolorem cum!</li>
               <li> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos veritatis, voluptatem iure tenetur quam eveniet debitis quas cupiditate dolorem cum!</li>
               <li> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos veritatis, voluptatem iure tenetur quam eveniet debitis quas cupiditate dolorem cum!</li>
               <li> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos veritatis, voluptatem iure tenetur quam eveniet debitis quas cupiditate dolorem cum!</li>
         
              </ul>  
              </div>
         
             <div style={{marginTop:"auto",justifyContent:"center",alignItems:"center",display:"flex"}} className="eventName_Int">  <span style={{  fontFamily:"jedi",fontSize:"2.2rem"}} className='gradient-text' > fee : </span><span style={{  fontFamily:"jedi",fontSize:"2.2rem"}}> 400₹</span>   </div>
            <div style={{marginBottom:"1rem"}} onClick={()=>setClicked(true)}> {(window.innerWidth>700) ? (<BtnDesktop data="Proceed to Checkout"/>) : (<Btn data="Proceed to Checkout"/>)}</div>
           </div>
   
 </div>
 <div id="footer"className="foot"><Footer/></div>
 </>
)}

 </>
):(
           <div style={{
width:"100%",
height:"100vh",
backgroundColor:"#110302"
}}>
{(iframe==0)?(
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%",position:"fixed"}}><span style={{  fontFamily:"jedi",fontSize:"4rem"}} className='gradient-text' > loading </span>  </div>    
):(null)}    

  
<iframe onLoad={()=>setIframe(true)} width="100%" height="100%" style={{border:"none"}} src="https://www.yepdesk.com/embed/buy-tickets/6624db1646e0fb0001c26cf1/private/6ptipoafj"></iframe>
</div>
)}

</>
);

}
export default Register;