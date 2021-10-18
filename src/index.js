import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Alumnos from "./components/Alumnos";
import Login from "./components/Login";

let nombre = "Gabriel";
let color = "orange";
let apellido = "Cova";

const App = () => {
  const [sesion, setSesion] = useState(false);
  console.log(sesion);
  return (
    <>
      {sesion === true ? (
        <>
          <h1 className="miestilo" style={{ color: color }}>
            Hola {nombre}
          </h1>
          <p>Cambiamos</p>
          {apellido && <p>Tu apellido es: {apellido}</p>}

          <Alumnos />
          <button onClick={() => setSesion(false)}>Cerrar sesión</button>
        </>
      ) : (
        <>
          <h3>No tienes permitido estar aqui.</h3>
          <h4>Por favor, inicia sesión</h4>
          <Login setSesion={setSesion} />
          {/* <button onClick={() => setSesion(true)}>Iniciar sesión</button> */}
        </>
      )}
    </>
  );
};
/* const verificarSesion = () => {
  if (sesion === true) {
    return miJSX;
  } else {
    return <h3>No tienes permitido estar aqui.</h3>;
  }
};
 */
// ReactDOM.render(verificarSesion(), document.getElementById("root"));
ReactDOM.render(<App />, document.getElementById("root"));
