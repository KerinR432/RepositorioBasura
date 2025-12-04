import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import '../estilos/Admin.css'

function Admin() {
    const [errores, setErrores] = useState({});
    const [form, setForm] = useState({
        nombre: '',
        precio: '',
        descripcion: '',
    });

    const gestionarCambio = (e) => {
        const { name, value, type, checked } = e.target;

        setForm({
            ...form,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const validar = () => {
        const nuevosErrores = {};

        // Validación para "nombre"
        if (!form.nombre.trim()) {
            nuevosErrores.nombre = 'El nombre es obligatorio';
        }

        // Validación para "precio"
        if (form.precio == 0) {
            nuevosErrores.precio = 'El precio no puede ser 0';
        }
        if (form.precio < 0) {
            nuevosErrores.precio = 'El precio no puede ser negativo';
        }

        // Validación para "descripcion"
        if (!form.descripcion.trim()) {
            nuevosErrores.descripcion = 'La descripción es obligatoria';
        } else if (form.descripcion.length < 10 || form.descripcion.length > 100) {
            nuevosErrores.descripcion = 'La descripción debe tener entre 10 y 100 caracteres';
        }

        setErrores(nuevosErrores);

        // Retorna true si no hay errores, de lo contrario retorna false
        return Object.keys(nuevosErrores).length === 0;
    };

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
                placeholder="Nombre del producto..."
            />
            {errores.nombre && <p className="error">{errores.nombre}</p>}

            {/* Campo de texto para precio */}
            <label htmlFor="precio">Precio</label>
            <input
                id="precio"
                type="number"
                name="precio"
                value={form.precio}
                onChange={gestionarCambio}
                placeholder="Precio"
            />
            {errores.precio && <p className="error">{errores.precio}</p>}

            {/* Textarea para descripción */}
            <label htmlFor="descripcion">Descripción</label>
            <textarea
                id="descripcion"
                name="descripcion"
                value={form.descripcion}
                onChange={gestionarCambio}
                placeholder="Descripción del producto..."
            />
            {errores.descripcion && <p className="error">{errores.descripcion}</p>}

            {/* Botón de envío */}
            <button type="submit">Enviar</button>

        </form>
    );
}

export default Admin