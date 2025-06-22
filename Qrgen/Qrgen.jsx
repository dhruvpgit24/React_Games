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
    <div className="App">
      <h1>QR Code Generator</h1>
      
      <input
        type="text"
        placeholder="Enter text"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={generateQRCode}>Generate</button>

      <div className="controls">
        <label>
          Background Color:
          <input
            type="color"
            onChange={(e) => setBgColor(e.target.value.slice(1))}
          />
        </label>
        <label>
          Size:
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
        <div className="output">
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
