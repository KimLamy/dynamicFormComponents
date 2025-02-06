import React, { useState } from "react";

const Formulario = ({ campos, onSubmit }) => {
    const [valores, setValores] = useState(
      campos.reduce((acc, campo) => ({ ...acc, [campo.name]: campo.defaultValue || "" }), {})
    );

    const manejarCambio = (e) => {
        const { name, value, type, checked } = e.target;
        setValores({ ...valores, [name]: type === "checkbox" ? checked : value });
      };

  const manejarEnvio = (e) => {
    e.preventDefault();
    onSubmit(valores);
  };

  return (
    <form onSubmit={manejarEnvio}>
      {campos.map((campo, index) => (
        <div key={index}>
          <label>{campo.label}</label>
          {campo.type === "select" ? (
            <select name={campo.name} value={valores[campo.name]} onChange={manejarCambio}>
              {campo.options.map((option, idx) => (
                <option key={idx} value={option.value}>{option.label}</option>
              ))}
            </select>
          ) : campo.type === "textarea" ? (
            <textarea name={campo.name} value={valores[campo.name]} onChange={manejarCambio} />
          ) : (
            <input
              type={campo.type}
              name={campo.name}
              checked={campo.type === "checkbox" ? valores[campo.name] : undefined}
              value={campo.type !== "checkbox" ? valores[campo.name] : undefined}
              onChange={manejarCambio}
            />
          )}
        </div>
      ))}
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Formulario;
