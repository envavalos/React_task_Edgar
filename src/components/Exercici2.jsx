import { useState } from "react";
import "../assets/Exercici2.css";

function Exercici2() {
  const [color, setColor] = useState("white");

  return (
    <div>
      <h1>Exercici 2</h1>
      <div className="medio">
        <div className="circulo" style={{ backgroundColor: color }}></div>
      </div>
      <div className="botons">
        <button onClick={() => setColor("red")}>Canvia a Vermell</button>
        <button onClick={() => setColor("blue")}>Canvia a Blau</button>
        <button onClick={() => setColor("green")}>Canvia a Verd</button>
      </div>
    </div>
  );
}

export default Exercici2