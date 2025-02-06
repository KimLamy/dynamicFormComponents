import React from "react";
import Formulario from "./components/Formulario";

const App = () => {
  const campos = [
    { label: "Nombre", name: "nombre", type: "text" },
    { label: "Email", name: "email", type: "email" },
    { label: "Contraseña", name: "password", type: "password" },
    { label: "Aceptar Términos", name: "terminos", type: "checkbox" },
    {
      label: "País",
      name: "pais",
      type: "select",
      options: [
        { label: "México", value: "mx" },
        { label: "Argentina", value: "ar" },
        { label: "España", value: "es" },
      ],
    },
    { label: "Comentario", name: "comentario", type: "textarea" },
  ];

  const manejarEnvio = (datos) => {
    console.log("Datos del formulario:", datos);
  };

  return (
    <div>
      <h1>Formulario Dinámico</h1>
      <Formulario campos={campos} onSubmit={manejarEnvio} />
    </div>
  );
};

export default App;


