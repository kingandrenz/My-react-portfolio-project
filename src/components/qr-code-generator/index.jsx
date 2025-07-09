import { useState } from 'react';
import QrCode from 'react-qr-code';
import './style.css';

export default function QrCodeGenerator() {
  const [qrCode, setQrCode] = useState('');
  const [input, setInput]   = useState('');

  function handleGenerateQrCode() {
    setQrCode(input.trim());
    setInput('');
  }

  return (
    <div className='container'>
      <h1>QR Generator</h1>

      <div>
        <input
          type="text"
          placeholder="Enter text here"
          value={input}
          onChange={e => setInput(e.target.value)}
        />

        <button
          onClick={handleGenerateQrCode}
          disabled={!input.trim()}
        >
          Generate code
        </button>
      </div>

      {qrCode && (
        <div style={{ marginTop: '2rem' }}>
          <QrCode
            key={qrCode}
            value={qrCode}
            size={400}
            bgColor="#fff"
          />
        </div>
      )}
    </div>
  );
}
