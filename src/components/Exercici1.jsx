import { useState } from "react"
function Exercici1() {
  const [contador, setContador] = useState(0) 
  function incrementar() {
    setContador(contador + 1)
  }
  function decrementar() {
    setContador(contador - 1)
  } 
  return (
    <div class="medio">
        <div class="Bloque_gran">
          <h1>Exercici 1</h1>
            <div class="Comptador">
                <h2>{contador}</h2>
            </div>
            <div class="botones">
                <button class="Bloque_des" onClick={decrementar}>- Decrementar</button>
                <button class="Bloque_inc" onClick={incrementar}>+ Incrementar</button>
            </div>
        </div>
    </div>
  )
}
export default Exercici1