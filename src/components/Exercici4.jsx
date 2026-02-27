import { useState } from "react";
import algo from "../imatges/algo.jpg";
import tequila from "../imatges/tequila.jpg";

function Exercici4() {
  const [imagen, setImagen] = useState(algo);

  const cambiarImagen = () => {
    setImagen(imagen === algo ? tequila : algo);
  };
  return (
    <div>
      <h1>Exercici 4</h1>
      <img src={imagen} alt="Imagen" width="300" />
      <div>
        <button onClick={cambiarImagen}>
          Canvia Imatge
        </button>
      </div>
    </div>
  );
}

export default Exercici4;