import React from "react";
import "./boton.css";

function Boton({ texto, botonDeClic, manejarClic }) {
  return (
    <div className="boton">
      <button
        className={botonDeClic ? "boton-click" : "boton-reset"}
        onClick={manejarClic}
      >
        {texto}
      </button>
    </div>
  );
}

export default Boton;
