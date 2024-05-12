import React, {useState} from "react";
import handleDownload from '../functions/handleDownload.jsx';
import rulebook from '../assets/rulebook.pdf'
import './menu.css'
import Btn from './btn'
const menu = () => {

    // to change burger classes
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden zIndexNeg")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    // toggle burger menu change
    const updateMenu = () => {
        if(!isMenuClicked) {
            // window.scrollTo({
            //     top: 0,
            //     behavior: 'auto'
            //   });
            
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible zIndexPos")
            document.body.style.overflow = 'hidden';
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden zIndexNeg")
            document.body.style.overflow = 'auto';
        }
        setIsMenuClicked(!isMenuClicked)
    }
    function scrollToTop(duration) {
        const start = window.scrollY;
        const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();
        const distance = start; // Distance to scroll
    
        function scroll() {
            const currentTime = 'now' in window.performance ? performance.now() : new Date().getTime();
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const scrollStep = Math.ceil(distance * progress); // Adjust speed here
    
            window.scrollTo(0, Math.max(start - scrollStep, 0)); // Ensures we don't scroll below 0
    
            if (window.scrollY > 0 && progress < 1) {
                requestAnimationFrame(scroll);
            }
        }
    
        scroll();
    }
    
    // Adjust duration as needed, lower values will result in faster scroll
    const closeMenu = ()=>{
        setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
            document.body.style.overflow = 'auto';
            setIsMenuClicked(!isMenuClicked)
    }
    return(
      <>
      
            <nav>
                <div className="burger-menu" onClick={updateMenu}>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                </div>
            </nav>

            <div className={menu_class}>
           
                <div className="menuBox">
                
                 <div className="menuTop"></div>   
                 <div className="menuBottom">
                    
                 <a href="#landing"><div className="btn" onClick={closeMenu}><Btn data="Home" /></div></a>  
                 <a href="#events"><div className="btn" onClick={closeMenu}><Btn data="Events" /></div></a>  
                 <a href="#sponsors"><div className="btn" onClick={closeMenu}><Btn data="Sponsors" /></div></a> 
                 <a href={rulebook} download="Robocor'24(RuleBook).pdf"><div className="btn" onClick={closeMenu}><Btn data="Rule Book" /></div></a>  
                 <a href="#footer"><div className="btn" onClick={closeMenu}><Btn data="About" /></div></a>   
                 <a href="/certificate"><div className="btn" onClick={closeMenu}><Btn data="Certificates" /></div></a>
                </div>
               
                
                </div>
           
            </div>
            </>
    )
}

export default menu;