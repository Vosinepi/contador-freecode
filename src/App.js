import "./App.css";
import freeCodeLogo from "./assets/imagenes/freecodecamp-logo.png";
import Boton from "./componentes/boton/boton.jsx";
import Contador from "./componentes/contador/contador.jsx";

function App() {
  const manejarClic = () => {
    console.log("clic");
  };

  const reiniciarCont = () => {
    console.log("reiniciar");
  };
  const contador = () => {
    return "juan";
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
        <Contador numClics = {3}/>
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
