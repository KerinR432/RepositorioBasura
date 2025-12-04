import React, { useState } from 'react';
import '../estilos/FormularioBase.css';

function FormularioBase() {
  // Almacenar los errores del Formulario
  const [errores, setErrores] = useState({});

  // Amacenar los valores del formulario(En todo momento!!!) 
  const [form, setForm] = useState({
    nombre: '',
    apellidos:'',
    descripcion: '',
    comunidad: '',
    mayorEdad: false,
    estadoCivil: 'soltero',
    dni: '',
  });

  //////////////////////////////////////
  // Función para gestionar los cambios en los campos del formulario
  //////////////////////////////////////
  const gestionarCambio = (e) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value,
    });
  };
  //////////////////////////////////////
  // Función de validación
  //////////////////////////////////////
  const validar = () => {
    const nuevosErrores = {};

    // Validación para "nombre"
    if (!form.nombre.trim()) {
      nuevosErrores.nombre = 'El nombre es obligatorio';
    }

    // Validación para "descripcion"
    if (form.descripcion && (form.descripcion.length < 10 || form.descripcion.length > 100)) {
      nuevosErrores.descripcion = 'La descripción debe tener entre 10 y 100 caracteres';
    }

    // Validación para "dni"
    if (!form.dni || form.dni.trim() === "") {
      nuevosErrores.dni = 'El DNI no puede estar vacío';
    }
    if (form.dni && (form.dni.length > 9 || form.dni.length < 9)) {
      nuevosErrores.dni = 'El DNI debe tener 9 caracteres';
    }
    if (form.dni && !/^\d{8}[A-Za-z]$/.test(form.dni)) {
      nuevosErrores.dni = 'El DNI debe contener 8 números y 1 letra';
    }
    const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    if (form.dni && form.dni.length === 9) {
      const numero = form.dni.substring(0, 8);
      const letra = form.dni.charAt(8).toUpperCase();
      const letraCorrecta = letras[numero % 23];
      if (letra !== letraCorrecta) {
        nuevosErrores.dni = `La letra del DNI no es correcta. Debe ser ${letraCorrecta}`;
      }
    }
    setErrores(nuevosErrores);

    // Retorna true si no hay errores, de lo contrario retorna false
    return Object.keys(nuevosErrores).length === 0;
  };

  // Función para manejar el envío del formulario
  const enviarFormulario = (e) => {
    e.preventDefault();

    // Validar antes de enviar
    if (validar()) {
      console.clear();
      console.log('Formulario Enviado', form);
    }
  };

  return (
    <form onSubmit={enviarFormulario}>
      {/* Campo de texto para nombre */}
      <label htmlFor="nombre">Nombre</label>
      <input
        id="nombre"
        type="text"
        name="nombre"
        value={form.nombre}
        onChange={gestionarCambio}
        placeholder="Escribe tu nombre"
      />
      {errores.nombre && <p className="error">{errores.nombre}</p>}

      <label htmlFor="dni">DNI</label>
      <input
        id="dni"
        type="text"
        name="dni"
        value={form.dni}
        onChange={gestionarCambio}
        placeholder="Escribe tu DNI"
      />
      {errores.dni && <p className="error">{errores.dni}</p>}

      {/* Campo de texto para apellidos */}
      <label htmlFor="apellidos">Apellidos</label>
      <input
        id="apellidos"
        type="text"
        name="apellidos"
        value={form.apellidos}
        onChange={gestionarCambio}
        placeholder="Escribe tus apellidos"
      />

      {/* Selector para comunidad */}
      <label htmlFor="comunidad">Comunidad</label>
      <select
        id="comunidad"
        name="comunidad"
        value={form.comunidad}
        onChange={gestionarCambio}
      >
        <option value="">-- Selecciona una comunidad --</option>
        <option value="Madrid">Madrid</option>
        <option value="Andalucia">Andalucia</option>
        <option value="Galicia">Galicia</option>
        <option value="Valencia">Valencia</option>
        <option value="Otros">Otros</option>
      </select>

      {/* Checkbox para mayor de edad */}
      <div>
        <input
          id="mayorEdad"
          type="checkbox"
          name="mayorEdad"
          checked={form.mayorEdad}
          onChange={gestionarCambio}
        />
        <label htmlFor="mayorEdad">¿Eres mayor de edad?</label>
      </div>

      {/* Radio buttons para estado civil */}
      <fieldset>
        <legend>Estado Civil</legend>
        <div>
          <input
            id="estadoSoltero"
            type="radio"
            value="soltero"
            name="estadoCivil"
            onChange={gestionarCambio}
            checked={form.estadoCivil === 'soltero'}
          />
          <label htmlFor="estadoSoltero">Soltero</label>
        </div>
        <div>
          <input
            id="estadoPareja"
            type="radio"
            value="en-pareja"
            name="estadoCivil"
            onChange={gestionarCambio}
            checked={form.estadoCivil === 'en-pareja'}
          />
          <label htmlFor="estadoPareja">En pareja</label>
        </div>
        <div>
          <input
            id="estadoCasado"
            type="radio"
            value="casado"
            name="estadoCivil"
            onChange={gestionarCambio}
            checked={form.estadoCivil === 'casado'}
          />
          <label htmlFor="estadoCasado">Casado</label>
        </div>
        <div>
          <input
            id="estadoDivorciado"
            type="radio"
            value="divorciado"
            name="estadoCivil"
            onChange={gestionarCambio}
            checked={form.estadoCivil === 'divorciado'}
          />
          <label htmlFor="estadoDivorciado">Divorciado</label>
        </div>
        <div>
          <input
            id="estadoViudo"
            type="radio"
            value="viudo"
            name="estadoCivil"
            onChange={gestionarCambio}
            checked={form.estadoCivil === 'viudo'}
          />
          <label htmlFor="estadoViudo">Viudo</label>
        </div>
      </fieldset>

      {/* Textarea para descripción */}
      <label htmlFor="descripcion">Descripción</label>
      <textarea
        id="descripcion"
        name="descripcion"
        value={form.descripcion}
        onChange={gestionarCambio}
        placeholder="Escribe una descripción"
      />
      {errores.descripcion && <p className="error">{errores.descripcion}</p>}

      {/* Botón de envío */}
      <button type="submit">Enviar</button>
    </form>
  );
}

export default FormularioBase;
