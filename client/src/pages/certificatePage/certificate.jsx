import React, { useState, useRef, useEffect } from 'react';
import Cert from '../../assets/partCert.jpg';
import './certificate.css';
import Footer from '../../components/Footer';
import logo from '../../assets/robocorLogo.png';
import certVideo from '../../assets/certLOOP.mp4';
import customFont from '../../assets/certFont.ttf'; // Import your custom font file

const Certificate = ({ textX = 1000, textY = 630, eventX = 1000, eventY = 855 }) => {
  const [phone, setPhone] = useState('');
  const [eventName, setEventName] = useState('');
  const [email, setEmail] = useState('');
  const [verifying, setVerifying] = useState(false);
  const [fontLoaded, setFontLoaded] = useState(false);
  const canvasRef = useRef(null);

  const isValidEmail = (email) => {
    // Regular expression for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  useEffect(() => {
    const font = new FontFace('CustomFont', `url(${customFont})`);
    font.load().then(() => {
      document.fonts.add(font);
      setFontLoaded(true);
    });

    window.addEventListener('load', () => {
      setFontLoaded(true);
    });

    return () => {
      window.removeEventListener('load', () => {});
    };
  }, []);

  const handleGenerateCertificate = async () => {
    if (!fontLoaded) {
      // Font not loaded yet, prevent generating certificate
      return;
    }
  
    if (!eventName.trim()) {
      alert('Please select an event.');
      return;
    }
  
    if (!phone.trim() && !email.trim()) {
      alert('Please enter details');
      return;
    }
  
    if (phone.trim().length !== 10 && email.trim() === '') {
      alert('Please enter a valid phone number (10 digits)');
      return;
    }
  
   
  
    if (phone.trim() && email.trim()) {
      alert('Please enter either phone number or email, not both');
      return;
    }
  
    setVerifying(true);
  
    // Prepare data to send to API
    const requestData = {
      email: email || phone,
      event: eventName// Ensure event name is lowercase
    };
  
    try {
      // Make API request
      const response = await fetch('/api/verifyCert', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
  
      const data = await response.json();
  
      if (data.name === 'null404') {
        alert('Details are not found in the database.');
        setVerifying(false);
      } else {
        // Response received successfully, proceed to generate certificate
        const name = data.name; // Assign the name received from the API response
  
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
  
        // Load template image
        const template = new Image();
        template.src = Cert;
        template.onload = () => {
          // Set canvas dimensions to match the image dimensions
          canvas.width = template.width;
          canvas.height = template.height;
  
          // Draw template image
          ctx.drawImage(template, 0, 0);
  
          // Draw text on certificate
          ctx.font = '9rem CustomFont'; // Set the font here
          ctx.fillStyle = 'black';
          ctx.textAlign = 'center';
          ctx.fillText(name, textX, textY); // Use specified X and Y coordinates
          ctx.fillText(eventName, eventX, eventY); // Draw event name with specified X and Y coordinates
  
          // Download certificate
          const link = document.createElement('a');
          link.href = canvas.toDataURL('image/jpg'); // Maintain PNG format for transparency support
          link.download = 'certificate.jpg';
          link.click();
  
          setVerifying(false);
        };
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while processing your request. Please try again later.');
      setVerifying(false);
    }
  };
  

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleEventNameChange = (event) => {
    setEventName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <>
      <div className="certificateContainer">
        <div className="certTitle">
          <img src={logo} style={{ width: "5rem", marginRight: "1rem" }} alt="logo"></img>
          <div className="certNavbar">
            <span className='gradient-text' style={{ fontSize: "4rem", fontFamily: "jedi" }}>RoBoCoR'24</span> Participation Certificate
          </div>
        </div>
        <div className="certBox">
          <div style={{ filter: `brightness(150%)`, marginBottom: "4rem" }}>
            <video style={{ width: "80%" }} autoPlay loop muted>
              <source src={certVideo} type="video/mp4" />
              CERTIFICATE
            </video>
          </div>
          <select
            className='inputField'
            value={eventName}
            style={{ fontWeight: "800" ,marginBottom:"3rem"}}
            onChange={handleEventNameChange}
          >
            <option value="" disabled>Select Event</option>
            <option value="ByteWars" >ByteWars</option>
            <option value="DroidRace">DroidRace</option>
            <option value="StarLink">StarLink</option>
            <option value="StarCrawl">StarCrawl</option>
            <option value="DroidKick">DroidKick</option>
            <option value="Arduino Craft">Arduino Craft</option>
            <option value="Project Symposium">Project Symposium</option>
            <option value="Quizzy Brainiacs">Quizzy Brainiacs</option>
          </select>

          <input
            type="tel"
            className='inputField'
            style={{ color: "white" }}
            value={phone}
            onChange={handlePhoneChange}
            placeholder="Enter phone number"
          />
          <div style={{marginBottom:"1rem"}}>OR</div>
          <input
            type="email"
            className='inputField'
            style={{ color: "white" }}
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
          />
          <button
            className="certbtn"
            style={{ backgroundColor: verifying ? '#cccccc' : 'white', cursor: verifying ? 'not-allowed' : 'pointer' }}
            onClick={handleGenerateCertificate}
            disabled={verifying || !fontLoaded}
          >
            {verifying ? 'Verifying...' : 'Download Certificate'}
          </button>
          <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
        </div>
      </div>
      <div id="footer" className="foot"><Footer /></div>
    </>
  );
}

export default Certificate;
