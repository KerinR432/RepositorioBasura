import { useEffect, useState } from "react";
import '../estilos/Admin.css'
import ProductoCrear from "./credProductos/crearProductos";
import productoBorrar from "./credProductos/borrarProducto";
import servicioProductos from "../servicios/servicioProductos";

import Modal from "./modal";
import Swal from "sweetalert2";

function Admin() {
  const [productos, setProductos] = useState([]);
  const [productoSelecionado, setPorductoSelecionado] = useState(null);

  const [modals, setModals] = useState({
    crear: false,
    consultar: false,
    editar: false,
  });

  const gestionarModal = (tipoModal, estadoAbierto) => {
    setModals({
      ...modals,
      [tipoModal]: estadoAbierto,
    })
  }

  useEffect(() => {
    servicioProductos.getAll()
      .then((response) => {
        setProductos(response.data);
      })
      .catch(() => {
        Swal.fire({
          title: "¿Tienes Internet?",
          text: "No consigo descargar las aficiones :(",
          icon: "question"
        });
      })
  }, [])

  const consultarProductos = (productos) => {
    setPorductoSelecionado(productos)
    gestionarModal("consultar", true)
  }

  const editarProducto = (producto) => {
    setPorductoSelecionado(producto);
    gestionarModal("editar", true)
  };

  const crearProducto = () => {
    gestionarModal("crear", true)
  };

  const borrarProducto = (producto) => {
    productoBorrar(producto, productos, setPorductoSelecionado)
  }
  return (
    <>
      <ul className="lista-productos">
        {productos.map((producto) => (
          <li key={producto.id} className="producto-item">
            <div>
              <strong>{producto.nombre}</strong>:
            </div>
            <div>
              <button onClick={() => consultarProductos(producto)}>
                Consultar
              </button>
              <button onClick={() => borrarProducto(producto)}>
                borrar
              </button>
              <button onClick={() => editarProducto(producto)}>

              </button>
            </div>
          </li>
        )
        )}
      </ul>

      <button className="add-producto-btn" onClick={crearProducto}>Añadir Producto</button>


      <Modal isOpen={modals.crear} onClose={()=>gestionarModal("crear",false)}>      
          <productoCrear aficiones={productos} setAficiones={setProductos} onClose={()=>gestionarModal("crear",false)} />
      </Modal>      

      <Modal isOpen={modals.consultar} onClose={()=>gestionarModal("consultar",false)}>
              {productoSelecionado && <AficionConsultar aficion={productoSelecionado} />} 
      </Modal> 
 
      <Modal isOpen={modals.editar} onClose={()=>gestionarModal("editar",false)} >
           <AficionEditar  aficiones={productoSelecionado} setAficiones={setProductos} onClose={()=>gestionarModal("editar",false)} />
      </Modal>  
    </>
  );
}

export default Admin;
