import React from 'react';

function Exercici1_3({ imatge, titol, text_paragraf, enllaç_boto, enllaç_boto2,  text_boto, text_boto2 }) {
  
  return (
    <div style={{ width: '345px', borderRadius: '8px', overflow: 'hidden', fontFamily: 'Arial', margin: '20px', background: '#373636',  height: '100%', display: 'flex', flexDirection: 'column' }}>
      
      <img src={imatge} alt={titol} style={{ width: '100%', height: '194px', objectFit: 'cover' }} />
      
      <div style={{ padding: '16px' }}>
        <h2 style={{ margin: '0 0 8px', fontWeight: '400', color: '#e2e2e2', textAlign: 'left' }}>{titol}</h2>
        <p style={{ margin: 0, fontSize: '14px', color: '#c5bebe', lineHeight: '1.5', textAlign: 'left' }}>{text_paragraf}</p>
      </div>
     
      <div style={{ padding: '8px', display: 'flex', gap: '10px', marginTop: 'auto'}}>
        <button onClick={() => window.open(enllaç_boto)} style={{ background: 'none', border: 'none', color: '#1976d2', fontWeight: 'bold', cursor: 'pointer', textAlign: 'left' }}>{text_boto}</button>
        <button onClick={() => window.open(enllaç_boto2)} style={{ background: 'none', border: 'none', color: '#1976d2', fontWeight: 'bold', cursor: 'pointer', textAlign: 'left' }}>{text_boto2}</button>
      </div>

    </div>
  );
}

export default Exercici1_3;