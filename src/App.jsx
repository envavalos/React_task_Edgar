import { useState } from "react";
import "./App.css";
import Menu from "./Menu";
import Exercici1 from "./components/Exercici1";
import Exercici2 from "./components/Exercici2";
import Exercici3 from "./components/Exercici3";
import Exercici4 from "./components/Exercici4";
import Exercici1_2 from "./components2/Exercici1_2";
import Exercici2_2 from "./components2/Exercici2_2";

function App() {
  const [tarea, setTarea] = useState("Exercici 1");

  function getTascaComponent() {
    switch (tarea) {
      case "Exercici 1":
        return <Exercici1 />;
      case "Exercici 2":
        return <Exercici2 />;
      case "Exercici 3":
        return <Exercici3 />;
      case "Exercici 4":
        return <Exercici4 />;
      case "Exercici 1_2":
        return <Exercici1_2 />;
      case "Exercici 2_2":
        return <Exercici2_2 />;
      default:
        return null;
    }
  }

  return (
    <div>
      <Menu canviarTasca={setTarea} />
      {getTascaComponent()}
    </div>
  );
}

export default App;