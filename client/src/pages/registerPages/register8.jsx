//quizzy Brainiacs
import Footer from '../../components/Footer.jsx';
import './register.css';
import Btn from '../../components/btn.jsx'
import handleDownload from '../../functions/handleDownload.jsx';
import BtnDesktop from '../../components/btnDesktop.jsx'
import quiz from '../../assets/compressed/quiz.jpg'
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
         
             <div id="left"> <img class="eventImage_event"src={quiz} style={{borderRadius:"1rem"}}></img></div>
            
             <div id="right"> 
             <div className="rightTop">
             <div className="eventName_event">  <span style={{  fontFamily:"jedi",fontSize:"3rem"}} className='gradient-text' > quizzy Brainiacs </span>   </div>
            
             <div className="eventMisc_event" style={{marginBottom:"2rem"}}>
             <span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' > timing</span> <span style={{ fontSize:"1.1rem"}}>: 12:45 PM </span>
             <span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' > venue</span> <span style={{ fontSize:"1.1rem"}}> : Online Mode</span>
             <span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' > teamsize</span> <span style={{ fontSize:"1.1rem"}}> : 1</span> 
             </div>
             <span style={{  fontFamily:"jedi",fontSize:"2rem"}} className='gradient-text' >event rules : </span><a href={rulebook} download="Robocor'24(RuleBook).pdf"><button class="moreBtn">more</button></a>
             <div className="eventRules">
               
<ul>
    <li>This event consists of 2 rounds.</li>
    <li>The quiz will be conducted in online mode (using Slido platform).</li>
    <li>Proper internet connectivity will be required.</li>
    <li>The quiz can be attempted from anywhere.</li>
    <li>The number of questions will be 40 in the first round and 20 in the second round.</li>
    <li>Quiz round 1 start timing is 12:45 pm.</li>
    <li>Round 2 timings will be announced later for those who qualify for round 1.</li>
    <li>Quiz timings will be very strict; if you miss the slot, you will not get another chance.</li>
    <li>The top 30 will be selected for round 2.</li>
    <li>Winners are determined based on the maximum score.</li>
    <li>If scores are tied for both participants, the winner will be declared based on timings.</li>
    <li>If there is still a tie, then one more round will be conducted.</li>
    <li>The judges' decision will be final.</li>
</ul>


           {/* <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"20vh"}}><span style={{  fontFamily:"jedi",fontSize:"2rem"}}>will be updated soon</span> </div>*/}
             </div>
         </div>        
             <div className="rightBottom">
             <div className="eventName_event">  <span style={{  fontFamily:"jedi",fontSize:"2rem"}} className='gradient-text' > fee : </span><span style={{  fontFamily:"jedi",fontSize:"2rem"}}>50₹</span>   </div>
            <div style={{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
            <a href={rulebook} download="Robocor'24(RuleBook).pdf"><div > {(window.innerWidth>700) ? (<BtnDesktop data="Rule Book"/>) : (<Btn data="Rule Book"/>)}</div></a>
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
             <img class="eventImage_Int"src={quiz} style={{borderRadius:"1rem"}}></img> 
             <div className="eventName_Int">  <span style={{  fontFamily:"jedi",fontSize:"2.5rem"}} className='gradient-text' > quizzy Brainiacs</span>   </div>
            
             <div className="eventMisc_Int">
             <span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' > timing</span> <span style={{ fontSize:"1.1rem"}}>: 12:45 PM </span>
             <span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' > venue</span> <span style={{ fontSize:"1.1rem"}}> : Online Mode</span><br></br>
             <span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' > teamsize</span> <span style={{ fontSize:"1.1rem"}}> : 1</span> 
  
             </div>
             <div className="eventName_Int">  <span style={{  fontFamily:"jedi",fontSize:"2rem"}} className='gradient-text' >event rules : </span><a href={rulebook} download="Robocor'24(RuleBook).pdf"><button class="moreBtn">more</button></a>   </div>
 
             
             <div className="eventRules" style={{marginLeft:"1.2rem"}}>
               
             <ul>
    <li>This event consists of 2 rounds.</li>
    <li>The quiz will be conducted in online mode (using Slido platform).</li>
    <li>Proper internet connectivity will be required.</li>
    <li>The quiz can be attempted from anywhere.</li>
    <li>The number of questions will be 40 in the first round and 20 in the second round.</li>
    <li>Quiz round 1 start timing is 12:45 pm.</li>
    <li>Round 2 timings will be announced later for those who qualify for round 1.</li>
    <li>Quiz timings will be very strict; if you miss the slot, you will not get another chance.</li>
    <li>The top 30 will be selected for round 2.</li>
    <li>Winners are determined based on the maximum score.</li>
    <li>If scores are tied for both participants, the winner will be declared based on timings.</li>
    <li>If there is still a tie, then one more round will be conducted.</li>
    <li>The judges' decision will be final.</li>
</ul>



{/*<div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"10vh"}}><span style={{  fontFamily:"jedi",fontSize:"2rem"}}>will be updated soon</span> </div>*/}
             
              </div>
         
             <div style={{marginTop:"auto",justifyContent:"center",alignItems:"center",display:"flex"}} className="eventName_Int">  <span style={{  fontFamily:"jedi",fontSize:"2.2rem"}} className='gradient-text' > fee : </span><span style={{  fontFamily:"jedi",fontSize:"2.2rem"}}> 50₹</span>   </div>
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

  
<iframe onLoad={()=>setIframe(true)} width="100%" height="100%" style={{border:"none"}} src="https://www.yepdesk.com/embed/buy-tickets/6624dd3346e0fb0001c277c2/private/ttt7j9p5th"></iframe>
</div>
)}

</>
);

}
export default Register;