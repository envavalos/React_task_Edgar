import React from 'react';

function Exercici1_4({imatge, titol, text_paragraf, enllaç_boto, enllaç_boto2, text_boto, text_boto2}) {
  return (
    <div style={{
      width: '100%',
      borderRadius: '8px',
      overflow: 'hidden',
      fontFamily: 'Arial',
      background: '#373636',
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <img
        src={imatge}
        alt={titol}
        style={{ width: '100%', height: '194px', objectFit: 'cover' }}
      />

      <div style={{ padding: '16px', flex: 1 }}> {/* flex: 1 empeny els botons avall */}
        <h2 style={{ margin: '0 0 8px', color: '#e2e2e2' }}>{titol}</h2>
        <p style={{ margin: 0, fontSize: '14px', color: '#c5bebe' }}>
          {text_paragraf}
        </p>
      </div>

      <div style={{ padding: '16px', display: 'flex', gap: '10px', marginTop: 'auto' }}>
        {/* Només mostrem el botó si existeix l'enllaç */}
        {enllaç_boto && (
          <button onClick={() => window.open(enllaç_boto, "_blank")}>
            {text_boto}
          </button>
        )}
        {enllaç_boto2 && (
          <button onClick={() => window.open(enllaç_boto2, "_blank")}>
            {text_boto2}
          </button>
        )}
      </div>
    </div>
  );
}

export default Exercici1_4;