import React, { useState, useRef } from 'react';
import Cert from './certificate.png';

const Certificate = () => {
  const [name, setName] = useState('');
  const canvasRef = useRef(null);

  const textX = 1600; // Customize X coordinate here
  const textY = 910; // Customize Y coordinate here

  const handleGenerateCertificate = () => {
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
    };
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <input type="text" value={name} onChange={handleNameChange} placeholder="Enter your name" />
      <button onClick={handleGenerateCertificate}>Generate Certificate</button>
      <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
    </div>
  );
}

export default Certificate;
