import { useState } from "react";
import "../estilos/Formulario.css";

function Formulario() {
  const [errores, setErrores] = useState({});

  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    descripcion: "",
    planeta: "",
    soldado: false,
    estadoCivil: "soltero",
  });

  const gestionarCambios = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validar = () => {
    const nuevosErrores = {};

    if (!form.nombre.trim()) {
      nuevosErrores.nombre = "El nombre es obligatorio";
    }

    if (
      form.descripcion &&
      (form.descripcion.length < 10 || form.descripcion.length > 100)
    ) {
      nuevosErrores.descripcion =
        "La descripción debe estar entre 10 y 100 caracteres";
    }

    setErrores(nuevosErrores);

    return Object.keys(nuevosErrores).length === 0;
  };

  const enviarFormulario = (e) => {
    e.preventDefault();

    if (validar()) {
      console.clear();
      console.log("Formulario Enviado", form);
    }
  };

  return (
    <>
      <div className="main">
        <form className="formulario-cliente" onSubmit={enviarFormulario}>
          <label htmlFor="nombre">Nombre</label>
          <input
            id="nombre"
            type="text"
            name="nombre"
            value={form.nombre}
            onChange={gestionarCambios}
            placeholder="Escribe un nombre"
          />
          {errores.nombre && <p className="error">{errores.nombre}</p>}

          <label htmlFor="apellido">Apellido</label>
          <input
            id="apellido"
            type="text"
            name="apellido"
            value={form.apeliido}
            onChange={gestionarCambios}
            placeholder="Escribe un apellido si lo tienes"
          />

          <label htmlFor="planeta">Nombre</label>
          <select
            name="planeta"
            id="planeta"
            value={form.planeta}
            onChange={gestionarCambios}
          >
            <option>--Colonias humanas interiores--</option>
            <option>--Colonias humanas exteriores--</option>
            <option>--Planeta Sangelios--</option>
            <option>--Planeta Balajo--</option>
            <option>--Luna de TE--</option>
          </select>

          <div className="check">
            <input
              type="checkbox"
              name="soldado"
              id="soldado"
              checked={form.soldado}
              onChange={gestionarCambios}
            />
            <label htmlFor="soldado">
              ¿Eres un soldado de cualquier facción?
            </label>
          </div>
          <fieldset>
            <legend> Dinos mas de ti </legend>
            <div>
              <input
                type="radio"
                name="estadoCivil"
                id="estadoSoltero"
                value="soltero"
                onChange={gestionarCambios}
                checked={form.estadoCivil === "soltero"}
              />
              <label htmlFor="estadoSoltero">Soltero</label>
            </div>
            <div>
              <input
                type="radio"
                name="estadoCivil"
                id="estadoPareja"
                value="en-pareja"
                onChange={gestionarCambios}
                checked={form.estadoCivil === "en-pareja"}
              />
              <label htmlFor="estadoPareja">pareja</label>
            </div>
            <div>
              <input
                type="radio"
                name="estadoCivil"
                id="estadoEnColonia"
                value="colonia"
                onChange={gestionarCambios}
                checked={form.estadoCivil === "colonia"}
              />
              <label htmlFor="estadoEnColonia">Colonia Lekgolo</label>
            </div>
            <div>
              <input
                type="radio"
                name="estadoCivil"
                id="estadoCasado"
                value="casado"
                onChange={gestionarCambios}
                checked={form.estadoCivil === "casado"}
              />
              <label htmlFor="estadoCasado">Casado</label>
            </div>
            <div>
              <input
                type="radio"
                name="estadoCivil"
                id="estadoViudo"
                value="viudo"
                onChange={gestionarCambios}
                checked={form.estadoCivil === "viudo"}
              />
              <label htmlFor="estadoViudo">Viudo</label>
            </div>
          </fieldset>
          <label htmlFor="descripcion">Descripción</label>
          <textarea
            name="descripcion"
            id="descripcion"
            value={form.descripcion}
            onChange={gestionarCambios}
            placeholder="Escribe una descripción de ti..."
          ></textarea>
          {errores.descripcion && (<p className="error">{errores.descripcion}</p>)}
          <button id="bton" type="submit">
            Enviar
          </button>
        </form>
      </div>
    </>
  );
}

export default Formulario;
