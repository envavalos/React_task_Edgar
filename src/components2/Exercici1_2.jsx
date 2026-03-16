import { useState } from "react";
import algo from "../imatges/algo.jpg";
import tequila from "../imatges/tequila.jpg";
import jai from "../imatges/jai.png";
import suku from "../imatges/suku.jpg";

function Exercici1_2() {
  const [images] = useState([algo, tequila, jai, suku]);

  return (
    <div 
      style={{
        display: "grid", 
        gridTemplateColumns: "200px 200px", 
        gap: "10px", 
        justifyContent: "center", 
        padding: "20px"
      }}
    >
      {images.map((image, index) => {
        return (
          <div key={index}>
            <img 
              src={image} 
              alt="meme" 
              style={{ 
                width: "200px",
                height: "200px",
                borderRadius: "8px"
              }} 
            />
          </div>
        );
      })}
    </div>
  );
}

export default Exercici1_2;