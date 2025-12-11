import React, { useState } from 'react';
import servicioProductos from '../../servicios/servicioProductos';
import Swal from 'sweetalert2';


function ProdcutoEditar({productos, setProductos, onClose}) {
  const [errores, setErrores] = useState({});
  
  const [form, setForm] = useState({
    nombre: productos.nombre,
  });

  const gestionarCambio = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };
  const validar = () => {
    const nuevosErrores = {};

    if (!form.nombre.trim()) {
      nuevosErrores.nombre = 'El nombre es obligatorio';
    }

    if (form.descripcion.length ===0 || form.descripcion.length > 100) {
      nuevosErrores.descripcion = 'La descripción debe tener entre 10 y 100 caracteres';
    }

    setErrores(nuevosErrores);

    return Object.keys(nuevosErrores).length === 0;
  };
  const enviarFormulario = (e) => {
    e.preventDefault();

    if (validar()) {
      console.clear();
      console.log('Formulario Enviado', form);
      
      const editarProductos = {          
        nombre: form.nombre,
      };

     
     
      //Enviar por Axios al Json de BD
      servicioProductos.update(productos.id,editarProductos)
      .then(response => {
        Swal.fire("Afición Actualizada correctamente"); 

        setForm({
          nombre: '',
          descripcion: '',
        });

       servicioProductos.getAll()
            .then((response) => {
              setProductos(response.data);
            })

        onClose();
       
      })
      .catch(error => {
        Swal.fire("ERROR, Al crear afición",error); 
      });

    }
   
  };

  return (
    <form onSubmit={enviarFormulario}>
      {/* Campo de texto para nombre */}
      <label htmlFor="nombre">Nombre de la Afición Editar</label>
      <input
        id="nombre"
        type="text"
        name="nombre"
        value={form.nombre}
        onChange={gestionarCambio}
        placeholder="Escribe el nombre de la afición"
      />
      {errores.nombre && <p className="error">{errores.nombre}</p>}

      {/* Campo de texto para descripción */}
      <label htmlFor="descripcion">Descripción de la Afición</label>
      <textarea
        id="descripcion"
        name="descripcion"
        value={form.descripcion}
        onChange={gestionarCambio}
        placeholder="Escribe una breve descripción de la afición"
      />
      {errores.descripcion && <p className="error">{errores.descripcion}</p>}

      {/* Botón de envío */}
      <button type="submit">Enviar</button>
    </form>
  );
}

export default ProdcutoEditar;