import React, { useState } from "react";

const Login = (props) => {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  const onChange = (e) => {
    if (e.target.name === "usuario") {
      setUsuario(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (usuario === "aldo" && password === "pass123") {
      alert("Credencias correctas");
      props.setSesion(true);
    } else {
      alert("Nel perro, tu no eres el usuario");
    }
  };

  return (
    <form action="" onSubmit={onSubmit}>
      <p>Usuario: {usuario}</p>
      <p>Contraseña: {password} </p>

      <div>
        <label htmlFor="usuario">Usuario</label>
        <input
          type="text"
          name="usuario"
          id="usuario"
          value={usuario}
          onChange={onChange}
        />
      </div>
      <div>
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={onChange}
        />
      </div>
      <button type="Submit">Iniciar sesión</button>
    </form>
  );
};

export default Login;
