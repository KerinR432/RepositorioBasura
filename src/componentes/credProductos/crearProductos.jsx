import { useState } from "react";
import servicioProductos from "../../servicios/servicioProductos";
import Swal from "sweetalert2";

function ProductoCrear({ produtos, setProductos, onClose }) {
    const [errores, setErrores] = useState({});

    const [form, setForm] = useState({
        nombreP: "",
        precio: "",
    });

    const gestionCambios = (e) => {
        const { name, value, type, checked } = e.target;
        setForm({
            ...form,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const validar = () => {
        const nuevosErrores = {};

        if (!form.nombreP.trim()) {
            nuevosErrores.nombreP = "El nombre del producto es obliglatorio";
        }

        if (!form.precio.trim()) {
            nuevosErrores.precio = "El precio es obligatorio";
        }
        setErrores(nuevosErrores);

        return Object.keys(nuevosErrores).length === 0;
    };

    const enviarFormulario = (e) => {
        e.preventDefault();

        if (validar()) {
            console.clear();
            console.log("Formulario Enviado", form);

            const nuevoProducto = {
                nombre: form.nombreP
            }
            //Enviar por Axios al Json de BD
        servicioProductos.create(nuevoProducto)
            .then(response => {
                Swal.fire("un producto se ha creado correctamente");
                // Limpiar el formulario después de agregar
                setForm({
                    nombre: '',
                });

                // Le ponemos el id correcto de la BD
                nuevoProducto.id = response.data.id

                // Actualizar el estado local de aficiones
                setProductos([...produtos, nuevoProducto]);

                //Cerramos el modal
                onClose();

            })
            .catch(error => {
                Swal.fire("ERROR, Al crear afición",error);
            });

        }
    }

    onClose()

    return (
        <>

            <div className="lista-Datos">
                <ul className="engobla-lista">
                    <li>

                    </li>
                </ul>
            </div>

            <div className="main-admin-form">
                <form className="formulario-admin" onSubmit={enviarFormulario}>
                    <fieldset className="border-formulario">
                        <legend>Ingresar un Producto</legend>
                        <label htmlFor="nombreP">Nombre Producto</label>
                        <input
                            id="nombreP"
                            type="text"
                            name="nombreP"
                            value={form.nombreP}
                            onChange={gestionCambios}
                            placeholder="Escribe el nombre del producto"
                        ></input>
                        {errores.nombreP && <p className="error">{errores.nombreP}</p>}

                        <label htmlFor="precio">Precio Producto</label>
                        <input
                            id="precio"
                            type="text"
                            name="precio"
                            value={form.precio}
                            onChange={gestionCambios}
                            placeholder="Escribe el el precio del producto"
                        ></input>
                        {errores.precio && <p className="error">{errores.precio}</p>}
                    </fieldset>
                    <button type="submit">Enviar Producto</button>
                </form>
            </div>

        </>
    )
}
export default ProductoCrear;