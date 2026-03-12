import { useState } from "react"
import algo from "../imatges/algo.jpg"
import tequila from "../imatges/tequila.jpg"
import jai from "../imatges/jai.png"
import suku from "../imatges/suku.jpg"

function Exercici1_2() {

  const [images] = useState([algo, tequila, jai, suku])

  return (
    <div style={{display:"grid", gridTemplateColumns:"1fr 1fr"}}>
      {images.map((image, index) => {
        return (
          <div key={index}>
            <img key={index} src={image} alt="drink" width="200" />
          </div>
        )
      })}
    </div>
  )
}

export default Exercici1_2;