import React, { useState, useRef } from 'react';
import Cert from './certificate.png';
import './certificate.css';

const Certificate = ({ textX = 1600, textY = 910 }) => {
  const [name, setName] = useState('');
  const [eventName, setEventName] = useState('');
  const [email, setEmail] = useState('');
  const [verifying, setVerifying] = useState(false);
  const canvasRef = useRef(null);

  const isValidEmail = (email) => {
    // Regular expression for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleGenerateCertificate = () => {
    if (!name.trim() || !eventName.trim() || !isValidEmail(email.trim())) {
      alert('Please fill out all fields correctly.');
      return;
    }

    setVerifying(true);

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
      ctx.font = 'bold 100px Arial';
      ctx.fillStyle = 'black';
      ctx.textAlign = 'center';
      ctx.fillText(name, textX, textY); // Use specified X and Y coordinates

      // Download certificate
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png'); // Maintain PNG format for transparency support
      link.download = 'certificate.png';
      link.click();

      setVerifying(false);
    };
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEventNameChange = (event) => {
    setEventName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className="certificateContainer">
      <div className="certTitle">Participation Certificate</div>
      <div className="certBox">
      <select
          className='inputField'
          value={eventName}
          style={{fontWeight:"800"}}
          onChange={handleEventNameChange}
        >
          <option value="" disabled>Event Name</option>
          <option value="ByteWars" >ByteWars</option>
          <option value="DroidRace">DroidRace</option>
          <option value="StarLink">StarLink</option>
          <option value="StarCrawl">StarCrawl</option>
          <option value="DroidKick">DroidKick</option>
          <option value="Arduino Craft">Arduino Craft</option>
          <option value="Project symposium">Project Symposium</option>
          <option value="quizzy Brainiacs">Quizzy Brainiacs</option>
        </select>

        <input
          type="text"
          className='inputField'
          style={{color:"white"}}
          value={name}
          onChange={handleNameChange}
          placeholder="Enter your name"
        />
        
        <input
          type="email"
          className='inputField'
          style={{color:"white"}}
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter your email"
        />
        <button 
          className="certbtn"
          style={{ backgroundColor: verifying ? '#cccccc' : 'white', cursor: verifying ? 'not-allowed' : 'pointer' }} 
          onClick={handleGenerateCertificate} 
          disabled={verifying}
        >
          {verifying ? 'Verifying...' : 'Download Certificate'}
        </button>
        <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
      </div>
    </div>
  );
}

export default Certificate;
