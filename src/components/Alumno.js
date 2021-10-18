import React from "react";

const Alumno = ({ nombre="sin nombre", apellido }) => {
  return (
    <>
      <li>
        <h5>{nombre} con {apellido}</h5>
      </li>
    </>
  );
};

export default Alumno;
