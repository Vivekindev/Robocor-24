//bytewars
import Footer from '../../components/Footer.jsx';
import './register.css';
import Btn from '../../components/btn.jsx'
import handleDownload from '../../functions/handleDownload.jsx';
import BtnDesktop from '../../components/btnDesktop.jsx'
import bytewars from '../../assets/compressed/bytewars.jpg'
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
         
             <div id="left"> <img class="eventImage_event"src={bytewars} style={{borderRadius:"1rem"}}></img></div>
            
             <div id="right"> 
             <div className="rightTop">
             <div className="eventName_event">  <span style={{  fontFamily:"jedi",fontSize:"3rem"}} className='gradient-text' > bytewars </span>   </div>
            
             <div className="eventMisc_event" style={{marginBottom:"2rem"}}>
             <span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' > timing</span> <span style={{ fontSize:"1.1rem"}}>: 10:30 AM </span>
             <span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' > venue</span> <span style={{ fontSize:"1.1rem"}}> : TEL 101 </span>
             <span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' > teamsize</span> <span style={{ fontSize:"1.1rem"}}> : 2</span> 
             <span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' > minimum</span> <span style={{ fontSize:"1.1rem"}}> : 1</span>
             </div>
             <span style={{  fontFamily:"jedi",fontSize:"2rem"}} className='gradient-text' >event rules : </span><a href={rulebook} download="Robocor'24(RuleBook).pdf"><button class="moreBtn">more</button></a>
             <div className="eventRules">

             <ul>
             <li>For the first round, a set of 40 questions on coding aptitude will be provided.</li>
             <li>Separate 1st round for 1st years and whoever comes first will get a consolation prize.</li>
             <li>Top 10 teams of 1st round will be selected.</li>
             <li>2nd round will be organized on HackerRank.com</li>
             <li>There will be 4 programming questions</li>
             <li>All participants must report at the venue 30 minutes before the event's commencement.</li>
             <li>The participants Id card must be signed by the coordinator.</li>
             <li>No time extension will be provided.</li>
             <li>Timing will be used as tie breaker.</li>
             <li>Copy pasting of code will not be allowed.</li>
             <li>Browsing or opening any other tab will not be allowed.</li>
              </ul> 
               
             </div>
         </div>        
             <div className="rightBottom">
             <div className="eventName_event">  <span style={{  fontFamily:"jedi",fontSize:"2rem"}} className='gradient-text' > fee : </span><span style={{  fontFamily:"jedi",fontSize:"2rem"}}>100₹</span>   </div>
            <div style={{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
            <a href={rulebook} download="Robocor'24(RuleBook).pdf"> <div> {(window.innerWidth>700) ? (<BtnDesktop data="Rule Book"/>) : (<Btn data="Rule Book"/>)}</div> </a>  
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
             <img class="eventImage_Int"src={bytewars} style={{borderRadius:"1rem"}}></img> 
             <div className="eventName_Int">  <span style={{  fontFamily:"jedi",fontSize:"2.5rem"}} className='gradient-text' > bytewars</span>   </div>
            
             <div className="eventMisc_Int">
             <span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' > timing</span> <span style={{ fontSize:"1.1rem"}}>: 10:30 AM </span>
             <span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' > venue</span> <span style={{ fontSize:"1.1rem"}}> :  TEL 101</span> <br></br>
             <button class="priceBtn" style={{marginTop:"0.6rem",marginRight:"0.5rem"}}><span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' >team size</span></button> <span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' > maximum</span> <span style={{ fontSize:"1.1rem"}}> : 2</span> 
             <span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' > minimum</span> <span style={{ fontSize:"1.1rem"}}> : 1</span>
             </div>
             <div className="eventName_Int">  <span style={{  fontFamily:"jedi",fontSize:"2rem"}} className='gradient-text' >event rules : </span><a href={rulebook} download="Robocor'24(RuleBook).pdf"><button class="moreBtn">more</button></a>   </div>
 
             
             <div className="eventRules" style={{marginLeft:"1.2rem"}}>
               
               <ul>
             <li>For the first round, a set of 40 questions on coding aptitude will be provided.</li>
             <li>Separate 1st round for 1st years and whoever comes first will get a consolation prize.</li>
             <li>Top 10 teams of 1st round will be selected.</li>
             <li>2nd round will be organized on HackerRank.com</li>
             <li>There will be 4 programming questions</li>
             <li>All participants must report at the venue 30 minutes before the event's commencement.</li>
             <li>The participants Id card must be signed by the coordinator.</li>
             <li>No time extension will be provided.</li>
             <li>Timing will be used as tie breaker.</li>
             <li>Copy pasting of code will not be allowed.</li>
             <li>Browsing or opening any other tab will not be allowed.</li>
              </ul>  
              </div>
         
             <div style={{marginTop:"auto",justifyContent:"center",alignItems:"center",display:"flex"}} className="eventName_Int">  <span style={{  fontFamily:"jedi",fontSize:"2.2rem"}} className='gradient-text' > fee : </span><span style={{  fontFamily:"jedi",fontSize:"2.2rem"}}> 100₹</span>   </div>
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

  
<iframe onLoad={()=>setIframe(true)} width="100%" height="100%" style={{border:"none"}} src="https://www.yepdesk.com/embed/buy-tickets/66234ccc46e0fb0001bb7ebc/private/fvqooqrbrv"></iframe>
</div>
)}

</>
);

}
export default Register;