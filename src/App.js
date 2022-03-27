import "./App.css";
import freeCodeLogo from "./assets/imagenes/freecodecamp-logo.png";
import Boton from "./componentes/boton/boton.jsx";
import Contador from "./componentes/contador/contador.jsx";
import { useState } from "react";

function App() {
  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  };

  const reiniciarCont = () => {
    setNumClics(0);
  };

  return (
    <div className="App">
      <div className="freecodelogo">
        <img
          className="freecodecamp-logo"
          src={freeCodeLogo}
          alt="Logo de freeCodeCamp"
        />
      </div>
      <div className="principal">
        <Contador numClics={numClics} />
        <Boton texto="CLIC" botonDeClic={true} manejarClic={manejarClic} />
        <Boton
          texto="REINICIAR"
          botonDeClic={false}
          manejarClic={reiniciarCont}
        />
      </div>
    </div>
  );
}

export default App;
