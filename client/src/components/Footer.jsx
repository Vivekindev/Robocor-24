import './Footer.css';
import rulebook from '../assets/rulebook.pdf'
import whatsapp from '../assets/whatsapp.png';
const Footer = () => {
    return (
        <div className="page-padding">
            <div className="footer-layout">
                <div className="footer-1-row">
                    <div className="footer-info-wrap">
                    <span style={{ fontSize: "2rem" ,fontFamily:"jedi",fontSize:"4rem"}} className='gradient-text'> corsit</span>
              
                        <p className="paragraph-gradient">
                        Corsit is the Robotics Club of Siddaganga Institute of Technology. Established in 2006, works under the patronage of e-Yantra cell of IIT Bombay.
                        </p>
                        <div className="footer-sm-wrap">
                            <a
                                href="https://www.youtube.com/@corsit547"
                                target="_blank"
                                className="social-media-link w-inline-block"
                            >
                                <img
                                    src="https://assets-global.website-files.com/64e444bae911b3d3a74c99ce/64ea1ce57e14851976264ba3_Youtube.svg"
                                    loading="lazy"
                                    alt=""
                                    className="social-media-icon"
                                />
                            </a>
                            <a
                                href="https://www.facebook.com/thecorsit"
                                target="_blank"
                                className="social-media-link w-inline-block"
                            >
                                <img
                                    src="https://assets-global.website-files.com/64e444bae911b3d3a74c99ce/64ea1ce4abcab308ba04e77c_Facebook.svg"
                                    loading="lazy"
                                    alt=""
                                    className="social-media-icon"
                                />
                            </a>
                            <a
                                href="https://www.instagram.com/corsit.sit"
                                target="_blank"
                                className="social-media-link w-inline-block"
                            >
                                <img
                                    src="https://assets-global.website-files.com/64e444bae911b3d3a74c99ce/64ea1ce5e764544da8bb1a38_Instagram.svg"
                                    loading="lazy"
                                    alt=""
                                    className="social-media-icon"
                                />
                            </a>
                            <a
                                href="https://www.linkedin.com/company/corsit/"
                                target="_blank"
                                className="social-media-link w-inline-block"
                            >
                                <img
                                    src="https://assets-global.website-files.com/64e444bae911b3d3a74c99ce/64ea1ce42064a3f8b91556e4_Linkedin.svg"
                                    loading="lazy"
                                    alt=""
                                    className="social-media-icon"
                                />
                            </a>
                           
                            {/* <a
                                href="https://wa.me/+916006499457"
                                target="_blank"
                                className="social-media-link w-inline-block"
                            >
                                <img
                                    src={whatsapp}
                                    style={{width:"2.8rem",paddingTop:"0.8rem",paddingLeft:"0.5rem"}}
                                    loading="lazy"
                                    alt=""
                                    className="social-media-icon"
                                />
                            </a> */}
                        </div>
                    </div>

                    <div className="footer-navigation-wrap">
                        <a href="https://robocor24.cyclic.app/" className="footer-nav-link w-inline-block">
                            <div>Home</div>
                        </a>
                        <a href={rulebook} download="Robocor'24(RuleBook).pdf" className="footer-nav-link w-inline-block">
                            <div>Rule Book</div>
                        </a>
                        <a href="https://www.corsit.in/" className="footer-nav-link w-inline-block">
                            <div>about</div>
                        </a>
                        
                        <a href="https://www.youtube.com/@corsit547" target="_blank" className="footer-nav-link w-inline-block">
                            <div>subscribe</div>
                        </a>
                        <a href="mailto:corsit@sit.ac.in" className="footer-nav-link w-inline-block">
                            <div>contact</div>
                        </a>
                        <a href="https://www.instagram.com/corsit.sit" className="footer-nav-link w-inline-block">
                            <div>follow</div>
                        </a>
                    </div>
                </div>
                <div className="contactDiv">

                    <div className="contactDivCard">
                        <div className="leftContactDivCard">

                        <div className="leftTop"><span style={{ fontSize: "2.2rem" ,fontFamily:"jedi"}} className='gradient-text'> ojas</span></div>    
                        <div className="leftBottom">Chairman</div>
                        </div>
                        <div className="rightContactDivCard">
                        <a
                                href="https://wa.me/+916006499457"
                                target="_blank"
                                className="social-media-link w-inline-block"
                            >
                                <img
                                    src={whatsapp}
                                    style={{width:"3rem"}}
                                    loading="lazy"
                                    alt=""
                                    className="social-media-icon"
                                />
                            </a>
                        </div>
                    </div>


                    <div className="contactDivCard">
                        <div className="leftContactDivCard">

                        <div className="leftTop"><span style={{ fontSize: "2.2rem" ,fontFamily:"jedi"}} className='gradient-text'> ashish</span></div>    
                        <div className="leftBottom">Vice Chairman</div>
                        </div>
                        <div className="rightContactDivCard">
                        <a
                                href="https://wa.me/+917619673936"
                                target="_blank"
                                className="social-media-link w-inline-block"
                            >
                                <img
                                    src={whatsapp}
                                    style={{width:"3rem"}}
                                    loading="lazy"
                                    alt=""
                                    className="social-media-icon"
                                />
                            </a>
                        </div>
                    </div>
                    
                    </div>
                <div className="footer-2-row">
                    <div className="small-p copyright">© 2024 Corsit. All rights reserved.</div>
                    
                </div>
            </div>
        </div>
    );
};

export default Footer;
