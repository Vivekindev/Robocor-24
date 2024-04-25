//arduino craft
import Footer from '../../components/Footer.jsx';
import './register.css';
import Btn from '../../components/btn.jsx'
import handleDownload from '../../functions/handleDownload.jsx';
import BtnDesktop from '../../components/btnDesktop.jsx'
const arduino = 'https://content.instructables.com/FQ4/JS4F/JIKJZG1J/FQ4JS4FJIKJZG1J.jpg?auto=webp&frame=1&width=840&height=1024&fit=bounds&md=3ed8980f9bb925d6ce5c348a02f3708e';
import { useState } from 'react';
import rulebook from '../../assets/rulebook.pdf'
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
         
             <div id="left"> <img class="eventImage_event"src={arduino} style={{borderRadius:"1rem"}}></img></div>
            
             <div id="right"> 
             <div className="rightTop">
             <div className="eventName_event">  <span style={{  fontFamily:"jedi",fontSize:"3rem"}} className='gradient-text' > arduino craft </span>   </div>
            
             <div className="eventMisc_event" style={{marginBottom:"2rem"}}>
             <span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' > timing</span> <span style={{ fontSize:"1.1rem"}}>: 10:30 AM </span>
             <span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' > venue</span> <span style={{ fontSize:"1.1rem"}}> : Media center</span>
             <span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' > teamsize</span> <span style={{ fontSize:"1.1rem"}}> : 3</span> 
             <span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' > minimum</span> <span style={{ fontSize:"1.1rem"}}> : 1</span>
             </div>
             <span style={{  fontFamily:"jedi",fontSize:"2rem"}} className='gradient-text' >event rules : </span><a href={rulebook} download="Robocor'24(RuleBook).pdf"><button class="moreBtn">more</button></a>
             <div className="eventRules">
               
             <ul>
                   <li>The event has 2 rounds</li>
                   <li>For the first round, a set of 30 questions on general technical skills will be provided</li>
                   <li>Top 7 teams of 1st round will be selected.</li>
                   <li>There will be 3 tasks in 2nd round, based on Arduino and electronics.</li>
                   <li>After completion of each task, next problem statement will be given</li>
                   <li>Arduino kit will be provided, participants will have to bring their own laptops.</li>
                   <li>All participants must be at venue 30 minutes before the event’s commencements</li>
                   <li>Judge’s decision will be final</li>
                   <li>Rules & Regulations may change without prior notice by the Event organizers</li>
              </ul>   
             </div>
         </div>        
             <div className="rightBottom">
             <div className="eventName_event">  <span style={{  fontFamily:"jedi",fontSize:"2rem"}} className='gradient-text' > fee : </span><span style={{  fontFamily:"jedi",fontSize:"2rem"}}>150₹</span>   </div>
            <div style={{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
            <a href={rulebook} download="Robocor'24(RuleBook).pdf"><div > {(window.innerWidth>700) ? (<BtnDesktop data="Rule Book"/>) : (<Btn data="Rule Book"/>)}</div> </a>  
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
             <img class="eventImage_Int"src={arduino} style={{borderRadius:"1rem"}}></img> 
             <div className="eventName_Int">  <span style={{  fontFamily:"jedi",fontSize:"2.5rem"}} className='gradient-text' > arduino craft</span>   </div>
            
             <div className="eventMisc_Int">
             <span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' > timing</span> <span style={{ fontSize:"1.1rem"}}>: 10:30 AM </span>
             <span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' > venue</span> <span style={{ fontSize:"1.1rem"}}> : Media center</span><br></br>
             <button class="priceBtn" style={{marginTop:"0.6rem",marginRight:"0.5rem"}}><span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' >team size</span></button> <span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' > maximum</span> <span style={{ fontSize:"1.1rem"}}> : 3</span> 
             <span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' > minimum</span> <span style={{ fontSize:"1.1rem"}}> : 1</span>
             </div>
             <div className="eventName_Int">  <span style={{  fontFamily:"jedi",fontSize:"2rem"}} className='gradient-text' >event rules : </span> <a href={rulebook} download="Robocor'24(RuleBook).pdf"><button class="moreBtn">more</button></a>  </div>
 
             
             <div className="eventRules" style={{marginLeft:"1.2rem"}}>
               
               <ul>
                   <li>The event has 2 rounds</li>
                   <li>For the first round, a set of 30 questions on general technical skills will be provided</li>
                   <li>Top 7 teams of 1st round will be selected.</li>
                   <li>There will be 3 tasks in 2nd round, based on Arduino and electronics.</li>
                   <li>After completion of each task, next problem statement will be given</li>
                   <li>Arduino kit will be provided, participants will have to bring their own laptops.</li>
                   <li>All participants must be at venue 30 minutes before the event’s commencements</li>
                   <li>Judge’s decision will be final</li>
                   <li>Rules & Regulations may change without prior notice by the Event organizers</li>
              </ul>  
              </div>
         
             <div style={{marginTop:"auto",justifyContent:"center",alignItems:"center",display:"flex"}} className="eventName_Int">  <span style={{  fontFamily:"jedi",fontSize:"2.2rem"}} className='gradient-text' > fee : </span><span style={{  fontFamily:"jedi",fontSize:"2.2rem"}}> 150₹</span>   </div>
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

  
<iframe onLoad={()=>setIframe(true)} width="100%" height="100%" style={{border:"none"}} src="https://www.yepdesk.com/embed/buy-tickets/6624265a46e0fb0001bfe80d/private/cj3ebh2tnf"></iframe>
</div>
)}

</>
);

}
export default Register;