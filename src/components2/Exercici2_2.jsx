import { useState } from "react"
import algo from "../imatges/algo.jpg"
import tequila from "../imatges/tequila.jpg"
import jai from "../imatges/jai.png"
import suku from "../imatges/suku.jpg"

function Exercici2_2() {

  const images = [algo, tequila, jai, suku]

  const [index, setIndex] = useState(0)

  const next = () => {
    setIndex((index + 1) % images.length)
  }

  const prev = () => {
    setIndex((index - 1 + images.length) % images.length)
  }

  return (
    <div>

      <img src={images[index]} alt="carousel" width="300"/>

      <div>
        <button onClick={prev}>Anterior</button>
        <button onClick={next}>Següent</button>
      </div>

    </div>
  )
}

export default Exercici2_2;