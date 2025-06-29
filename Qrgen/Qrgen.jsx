import { useState, useEffect } from 'react';
import './Qr.css';

function Qrgen() {
  const [input, setInput] = useState('');
  const [qrData, setQrData] = useState('');
  const [size, setSize] = useState(400);
  const [bgColor, setBgColor] = useState('ffffff');
  const [qrUrl, setQrUrl] = useState('');

  useEffect(() => {
    if (qrData) {
      setQrUrl(`https://api.qrserver.com/v1/create-qr-code/?data=${qrData}&size=${size}x${size}&bgcolor=${bgColor}`);
    }
  }, [qrData, size, bgColor]);

  const generateQRCode = () => {
    setQrData(input);
  };

  return (
    <div className="qr-container">
      <h1>QR Code Generator</h1>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter text or URL"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={generateQRCode}>Generate</button>
      </div>

      <div className="controls">
        <label>
          Background Color
          <input
            type="color"
            value={`#${bgColor}`}
            onChange={(e) => setBgColor(e.target.value.slice(1))}
          />
        </label>
        <label>
          Size: {size}px
          <input
            type="range"
            min="200"
            max="600"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          />
        </label>
      </div>

      {qrUrl && (
        <div className="output-section">
          <img src={qrUrl} alt="QR Code" />
          <a href={qrUrl} download="qrcode">
            <button>Download</button>
          </a>
        </div>
      )}
    </div>
  );
}

export default Qrgen;
