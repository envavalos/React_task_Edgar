import { useState } from "react";
import "../assets/Exercici3.css";

function Exercici3() {
  const [estil, setEstil] = useState("normal");

  return (
    <div>
      <h1>Exercici 3</h1>
      <div className="medio">
        <p className={estil}>Lorem Ipsum</p>
      </div>
      <div className="botons">
        <button onClick={() => setEstil("negreta")}>Canvia a Negreta</button>
        <button onClick={() => setEstil("cursiva")}>Canvia a Cursiva</button>
        <button onClick={() => setEstil("subratlla")}>Canvia a Subratlla</button>
      </div>
    </div>
  );
}

export default Exercici3