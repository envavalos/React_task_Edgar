import { useState } from "react"
import Exercici1 from "./components/Exercici1"
import Exercici2 from "./components/Exercici2"
import Exercici3 from "./components/Exercici3"
import Exercici4 from "./components/Exercici4"
import Exercici1_2 from "./components2/Exercici1_2"  
import Exercici2_2 from "./components2/Exercici2_2"

function Menu() {
    const [contador, setContador] = useState(0)
    if (contador === 1) {
        return (
            <div>
                <Exercici1 />
                <Exercici2 />
                <Exercici3 />
                <Exercici4 />
            </div>
        )
    }
    if (contador === 2) {
        return (
            <div>
                <Exercici1_2 />
                <Exercici2_2 />
            </div>
        )
    }
  return (
    <div class="medio">
        <div class="Bloque_gran">
          <h1>Tasques Biblio</h1>
            <div class="botones">
                <button onClick={() => setContador(1)}>Tasca 1</button>
            </div>
            <div class="botones">
                <button onClick={() => setContador(2)}>Tasca 2</button>
            </div>
        </div>
    </div>
  )
}
export default Menu