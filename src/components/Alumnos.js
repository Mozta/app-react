import React from "react";
import Alumno from "./Alumno";

const Alumnos = () => {
  const alumnos = ["Alejandro", "Gabriel", "Eduardo", "Aldo"];
  return (
    <>
      <ul>
        {alumnos.map((alumno, index) => {
          /* return <li key={index}>{alumno}</li>; */
          return <Alumno key={index} nombre={alumno} apellido="su apellido"/>;
        })}
      </ul>
    </>
  );
};

export default Alumnos;
