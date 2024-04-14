import React, { useState, useEffect } from 'react';
import './App.css';
import robocorLogo from './assets/robocorLogo.png';
import line from './assets/underline.png';
import Footer from './Footer.jsx';
import Menu from './menu.jsx';
import Map from './map.jsx'
import Btn from './btn.jsx'
import BtnDesktop from './btnDesktop.jsx'
function App() {
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };
  
        window.addEventListener('scroll', handleScroll);
  
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
  
    const [loaded, setLoaded] = useState(false);
  
    useEffect(() => {
      // Simulating loading time
      setTimeout(() => {
        setLoaded(true);
      }, 1); // Adjust the time as needed
    }, []);
  
    const scrollToElement = (id) => {
      const miscDiv = document.getElementById(id);
      if (miscDiv) {
        window.scrollTo({
          top: miscDiv.offsetTop,
          behavior: 'smooth'
        });
      }
    };

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
       <div>
          <Menu /> 
        {/*-----------------------------------------------HEADER---------------------------------------------------------*/ }  
        <img id="robocorLogo" src={robocorLogo}></img>
            <header className={`header ${scrolling ? 'scrolled' : ''}`}>
                <div className="container l-header__container u-relative">
                    <div className="l-header__row row u-flex u-align-items-center">
                        <div className="col-12 u-flex u-align-items-center">
                            <div className="l-header__burger u-none--lg">
                                <svg className="c-icon c-icon--lg isOpen">
                                    <use xlinkHref="#icon-burger-close" x="0" y="0" className="u-fill-"></use>
                                </svg>
                            </div>
                            <ul className="l-nav u-flex u-flex-column u-flex-row--lg u-align-items-start u-none u-flex--lg" data-v-6ddf8e5c="">
                                <li className="l-nav__item" data-v-6ddf8e5c="">
                                    <a onClick={()=>scrollToElement('landing')} className="t-text-gradient t-link  t-link--gradient " data-text="Home" data-v-6ddf8e5c="">
                                        <span className="u-inline-block t-text-gradient " data-v-6ddf8e5c="">Home</span>
                                    </a>
                                </li>
                                <li className="l-nav__item" data-v-6ddf8e5c="">
                                    <a  onClick={()=>scrollToElement('events')}  className="t-text-gradient t-link  t-link--gradient " data-text="Events" data-v-6ddf8e5c="">
                                        <span className="u-inline-block t-text-gradient " data-v-6ddf8e5c="">Events</span>
                                    </a>
                                </li>
                                <li className="l-nav__item" data-v-6ddf8e5c="">
                                    <a onClick={()=>scrollToElement('footer')} className="t-text-gradient t-link  t-link--gradient " data-text="About" data-v-6ddf8e5c="">
                                        <span className="u-inline-block t-text-gradient " data-v-6ddf8e5c="">About</span>
                                    </a>
                                </li>
                                <li className="l-nav__item" data-v-6ddf8e5c="">
                                    <a href="/home" className="t-text-gradient t-link  t-link--gradient " data-text="About" data-v-6ddf8e5c="">
                                        <span className="u-inline-block t-text-gradient " data-v-6ddf8e5c="" >Rule Book</span>
                                    </a>
                                </li>
                            </ul>
                            
                            <div className="l-header__container__nl u-justify-content-end u-none u-flex--lg">
                             <a href="/register">  <button className="c-cta u-justify-content-center u-align-items-center u-cursor-pointer" data-v-8f71f97c="" to="">
                                    <span className="c-cta__name" data-v-8f71f97c="" data-text="Register">
                                        <span data-v-8f71f97c="">Register</span>
                                    </span>
                                    <span className="u-wrapper-panel u-pointer-none" data-v-8f71f97c="">
                                      <svg data-v-8f71f97c="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 212 47" preserveAspectRatio="none">
                           <linearGradient data-v-8f71f97c="" id="xhrlr" gradientUnits="userSpaceOnUse" x1="15.247" y1="767.5" x2="196.052" y2="767.5" gradientTransform="translate(0 -744)">
                              <stop data-v-8f71f97c="" offset="0" stop-color="#d6b07f"></stop>
                              <stop data-v-8f71f97c="" offset="1" stop-color="#82624f"></stop>
                           </linearGradient>
                           <path data-v-8f71f97c="" fill="none" stroke="url(#xhrlr)" stroke-miterlimit="10" d="m195.8 32.5-4.7 14H20.2l-4.7-14m0-18 4.7-14h170.9l4.7 13.9"></path>
                           <linearGradient data-v-8f71f97c="" id="ejirl" gradientUnits="userSpaceOnUse" x1="12.245" y1="767.5" x2="199.053" y2="767.5" gradientTransform="translate(0 -744)">
                              <stop data-v-8f71f97c="" offset="0" stop-color="#d6b07f"></stop>
                              <stop data-v-8f71f97c="" offset="1" stop-color="#82624f"></stop>
                           </linearGradient>
                           <path data-v-8f71f97c="" fill="none" stroke="url(#ejirl)" stroke-miterlimit="10" d="m12.5 16.5 4.8-14H194l4.8 14.1m0 13.9-4.7 14H17.2l-4.7-14.1"></path>
                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 212 47" preserveAspectRatio="none" data-v-8f71f97c="">
                                            <path fillRule="evenodd" clipRule="evenodd" fill="#fff" d="M198 21l-1 1.999L198 25l7-2.001L198 21zM13 25l1-2.001L13 21l-7 1.999L13 25z"></path>
                                        </svg>
                                    </span>
                                </button>
                                </a> 
                            </div>

                        </div>
                    </div>
                </div>
            </header>
        {/*-----------------------------------------------HEADER---------------------------------------------------------*/ }       
            
<div id='landing'className="landing">  
    <div className="title">
       
    <span
        className="u-inline-block t-text-gradient"
        data-v-6ddf8e5c=""
        id="robocor"
        style={{
          opacity: loaded ? 1 : 0,
          transition: 'opacity 1.2s ease',
        }}
      >
        R0B0C0R'24
      </span>
            <img src={line} className='img glow'></img>
       
        <div className='tag'>
        <span style={{
  fontSize: "1.5rem",
  color: "#AE8A68",
  
}}>
  Unleashing Tech Wonders
</span>

        </div>
        

                            
    </div>
    
</div>




{/*-----------------------------------------------------------------EVENTS--------------------------------------------------------------------------------------------------------------------*/}
            <div className="misc">
          <center> <span style={{  fontFamily:"jedi",fontSize:"4rem"}} className='gradient-text' > Ei/ENTS</span>  </center> 
            <div className="eventCard">
              <img class="eventImage"src="https://robocor-23.cyclic.app/imgs/dcode.jpg" style={{borderRadius:"1rem"}}></img> 
              <div className="eventName">  <span style={{  fontFamily:"jedi",fontSize:"2.2rem"}} className='gradient-text' > ByteWars</span>   </div>
              <div className="eventDetails">
              Coding is an integral part of Robotics. Our coding event is designed to be both challenging and fun During this event, you will have the chance to compete with other talented programmers and solve challenging coding problems. The winners will be determined based on accuracy, efficiency, and speed.
              </div>
              <div className="eventMisc">
              <span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' > Timing</span> : 10:30 AM
              <span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' > Teamsize</span> : 2
              </div>
             <a href="/register"><div> {(window.innerWidth>700) ? (<BtnDesktop data="Register"/>) : (<Btn data="Register"/>)}</div></a>
            </div>

            <div className="eventCard">
              <img class="eventImage"src="https://robocor-23.cyclic.app/imgs/lfr.jpg" style={{borderRadius:"1rem"}}></img> 
              <div className="eventName">  <span style={{  fontFamily:"jedi",fontSize:"2.2rem"}} className='gradient-text' > DroidRace </span>   </div>
              <div className="eventDetails">
              Fumble and it’s all over!! Trace it and track the prize!!! This event is for the code masters. Here’s your chance to prove your robot’s worth. A series of simple yet complex path are to be traced by the autonomous robot. Build the right circuit and test the precision of your programming. And as the saying goes, You don’t fall out of track and you shall emerge victorious.
              </div>
              <div className="eventMisc">
              <span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' > Timing</span> : 10:30 AM
              <span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' > Teamsize</span> : 4
              </div>
             <a href="/register"><div> {(window.innerWidth>700) ? (<BtnDesktop data="Register"/>) : (<Btn data="Register"/>)}</div></a>
            </div>

            <div className="eventCard">
              <img class="eventImage"src="https://robocor-23.cyclic.app/imgs/bluetooth.jpg" style={{borderRadius:"1rem"}}></img> 
              <div className="eventName">  <span style={{  fontFamily:"jedi",fontSize:"2.2rem"}} className='gradient-text' > StarLink  </span>   </div>
              <div className="eventDetails">
              Gear up for rumbling engines, flamboyant wireless cars and adrenaline packed races at the all new Cross Roads. It's all about speed, control and accuracy, the bot that covers the track in the minimum time collecting the maximum points will be the champion. Now put effort into competition and conquer the field.
              </div>
              <div className="eventMisc">
              <span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' > Timing</span> : 10:30 AM
              <span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' > Teamsize</span> : 4
              </div>
             <a href="/register"><div> {(window.innerWidth>700) ? (<BtnDesktop data="Register"/>) : (<Btn data="Register"/>)}</div></a>
            </div>

            <div className="eventCard">
              <img class="eventImage"src="https://robocor-23.cyclic.app/imgs/ruggedrace.jpg" style={{borderRadius:"1rem"}}></img> 
              <div className="eventName">  <span style={{  fontFamily:"jedi",fontSize:"2.2rem"}} className='gradient-text' > StarCrawl </span>   </div>
              <div className="eventDetails">
              Each participant has to design and build a manually controlled wired/wireless bot. During this event your robots will face various obstacles, such as navigating through rough terrain, climbing over obstacles, and crossing water barriers. The course is designed to test your robot's strength, speed, and adaptability as they go through challenging terrain.
              </div>
              <div className="eventMisc">
              <span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' > Timing</span> : 10:30 AM
              <span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' > Teamsize</span> : 4
              </div>
             <a href="/register"><div> {(window.innerWidth>700) ? (<BtnDesktop data="Register"/>) : (<Btn data="Register"/>)}</div></a>
            </div>

            <div className="eventCard">
              <img class="eventImage"src="https://i.ytimg.com/vi/Jz382I8ew8g/maxresdefault.jpg" style={{borderRadius:"1rem"}}></img> 
              <div className="eventName">  <span style={{  fontFamily:"jedi",fontSize:"2.2rem"}} className='gradient-text' > DroidKick  </span>   </div>
              <div className="eventDetails">
              The objective is to design a manual robot which can compete compete against each other in a soccer arena. It will be a one vs one soccer match in which the aim will be to push the ball in the opponent's goal post. Our Robo Soccer event is designed to be both challenging and entertaining, providing you with the opportunity to win some fantastic prizes.
              </div>
              <div className="eventMisc">
              <span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' > Timing</span> : 10:30 AM
              <span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' > Teamsize</span> : 4
              </div>
             <a href="/register"><div> {(window.innerWidth>700) ? (<BtnDesktop data="Register"/>) : (<Btn data="Register"/>)}</div></a>
            </div>

            <div className="eventCard">
              <img class="eventImage"src="https://robocor-23.cyclic.app/imgs/projectsymposium.jpg" style={{borderRadius:"1rem"}}></img> 
              <div className="eventName">  <span style={{  fontFamily:"jedi",fontSize:"2.2rem"}} className='gradient-text' > Project symposium </span>   </div>
              <div className="eventDetails">
              Are you ready to show your skills? A Platform to build, develop and showcase your ideas. The staple diet of all technical events is undoubtedly the presentation event, yet it has something in it which makes it exciting . Sweat your mind and work to innovate the future.take out your imagination into the real world and experience the unique satisfaction of ur dream come true.
              </div>
              <div className="eventMisc">
              <span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' > Timing</span> : 10:30 AM
              <span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' > Teamsize</span> : 4
              </div>
             <a href="/register"><div> {(window.innerWidth>700) ? (<BtnDesktop data="Register"/>) : (<Btn data="Register"/>)}</div></a>
            </div>
            
            <div className="eventCard">
              <img class="eventImage"src="https://robocor-23.cyclic.app/imgs/spardha.jpg" style={{borderRadius:"1rem"}}></img> 
              <div className="eventName">  <span style={{  fontFamily:"jedi",fontSize:"2.2rem"}} className='gradient-text' > quizzy Brainiacs </span>   </div>
              <div className="eventDetails">
              Are you ready to show your skills? A Platform to build, develop and showcase your ideas. The staple diet of all technical events is undoubtedly the presentation event, yet it has something in it which makes it exciting . Sweat your mind and work to innovate the future.take out your imagination into the real world and experience the unique satisfaction of ur dream come true.
              </div>
              <div className="eventMisc">
              <span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' > Timing</span> : 10:30 AM
              <span style={{  fontFamily:"jedi",fontSize:"1.1rem"}} className='gradient-text' > Teamsize</span> : 4
              </div>
             <a href="/register"><div> {(window.innerWidth>700) ? (<BtnDesktop data="Register"/>) : (<Btn data="Register"/>)}</div></a>
            </div>
           <div style={{marginTop:"2rem"}}> <center> <span style={{  fontFamily:"jedi",fontSize:"4rem"}} className='gradient-text' > SP0NS0RS</span>  </center> </div>
            </div>
            

{/*------------------------------------------------------------------EVENTS-------------------------------------------------------------------------------------------------------------------*/}           
            <Map/>
            
           
           <div className="foot"><Footer/></div> 
        </div>

       
    );
}

export default App;
