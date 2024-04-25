//droidkick
import Footer from '../../components/Footer.jsx';
import './register.css';
import Btn from '../../components/btn.jsx'
import handleDownload from '../../functions/handleDownload.jsx';
import BtnDesktop from '../../components/btnDesktop.jsx'
import droidkick from '../../assets/compressed/droidkick.jpg'
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
         
             <div id="left"> <img class="eventImage_event"src={droidkick} style={{borderRadius:"1rem"}}></img></div>
            
             <div id="right"> 
             <div className="rightTop">
             <div className="eventName_event">  <span style={{  fontFamily:"jedi",fontSize:"3rem"}} className='gradient-text' > droidkick </span>   </div>
            
             <div className="eventMisc_event" style={{marginBottom:"2rem"}}>
             <span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' > timing</span> <span style={{ fontSize:"1.1rem"}}>: 10:30 AM </span>
             <span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' > venue</span> <span style={{ fontSize:"1.1rem"}}> : Canteen 1st floor</span>
             <span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' > teamsize</span> <span style={{ fontSize:"1.1rem"}}> : 4</span> 
             <span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' > minimum</span> <span style={{ fontSize:"1.1rem"}}> : 2</span>
             </div>
             <span style={{  fontFamily:"jedi",fontSize:"2rem"}} className='gradient-text' >event rules : </span><a href={rulebook} download="Robocor'24(RuleBook).pdf"><button class="moreBtn">more</button></a>
             <div className="eventRules">
               
             <ul>
               <li>The robot should fit inside a box of 30cm x 30cm x 30cm</li>
               <li>Robot should not exceed 8 kg</li>
               <li>The robot can be wired, wireless or autonomous</li>
               <li>The robot should be self-powered with supply not exceeding 12V (on board power supply).</li>
               <li>A robot can push or hit the ball. It cannot withhold or grab the ball</li>
               <li>If the ball goes out of arena, it will be placed in the centre and match will be resumed</li>
               <li>In case of a tie, 3 penalties will be taken by each team</li>
               <li>Human interference (e.g. touching the robot) during the game is not allowed.</li>
               <li>No more AC/DC power supply will be provided at the sight of play</li>
              </ul>   
             </div>
         </div>        
             <div className="rightBottom">
             <div className="eventName_event">  <span style={{  fontFamily:"jedi",fontSize:"2rem"}} className='gradient-text' > fee : </span><span style={{  fontFamily:"jedi",fontSize:"2rem"}}>400₹</span>   </div>
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
             <img class="eventImage_Int"src={droidkick} style={{borderRadius:"1rem"}}></img> 
             <div className="eventName_Int">  <span style={{  fontFamily:"jedi",fontSize:"2.5rem"}} className='gradient-text' > droidkick</span>   </div>
            
             <div className="eventMisc_Int">
             <span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' > timing</span> <span style={{ fontSize:"1.1rem"}}>: 10:30 AM </span>
             <span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' > venue</span> <span style={{ fontSize:"1.1rem"}}> : Canteen 1st floor</span><br></br>
             <button class="priceBtn" style={{marginTop:"0.6rem",marginRight:"0.5rem"}}><span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' >team size</span></button> <span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' > maximum</span> <span style={{ fontSize:"1.1rem"}}> : 4</span> 
             <span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' > minimum</span> <span style={{ fontSize:"1.1rem"}}> : 2</span>
             </div>
             <div className="eventName_Int">  <span style={{  fontFamily:"jedi",fontSize:"2rem"}} className='gradient-text' >event rules : </span> <a href={rulebook} download="Robocor'24(RuleBook).pdf"><button class="moreBtn">more</button></a>   </div>
 
             
             <div className="eventRules" style={{marginLeft:"1.2rem"}}>
               
               <ul>
               <li>The robot should fit inside a box of 30cm x 30cm x 30cm</li>
               <li>Robot should not exceed 8 kg</li>
               <li>The robot can be wired, wireless or autonomous</li>
               <li>The robot should be self-powered with supply not exceeding 12V (on board power supply).</li>
               <li>A robot can push or hit the ball. It cannot withhold or grab the ball</li>
               <li>If the ball goes out of arena, it will be placed in the centre and match will be resumed</li>
               <li>In case of a tie, 3 penalties will be taken by each team</li>
               <li>Human interference (e.g. touching the robot) during the game is not allowed.</li>
               <li>No more AC/DC power supply will be provided at the sight of play</li>
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

  
<iframe onLoad={()=>setIframe(true)} width="100%" height="100%" style={{border:"none"}} src="https://www.yepdesk.com/embed/buy-tickets/6624247346e0fb0001bfe2ef/private/617tpp4lk6"></iframe>
</div>
)}

</>
);

}
export default Register;