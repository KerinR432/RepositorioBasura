import servicioProductos from "../../servicios/servicioProductos";
import Swal from "sweetalert2";

const productoBorrar = (producto, productos, setProductos) => {
 
Swal.fire({
    title: "¿Estás seguro?",
    text: "No podrás revertir esta acción",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Sí, eliminar",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
        servicioProductos.delete(producto.id)
        .then(() => {
          Swal.fire("Afición borrada correctamente");
          const nuevasAficiones = producto.filter((a) => a.id !== producto.id);
          setProductos(nuevasAficiones);
          Swal.fire(
            "¡Eliminado!",
            "El elemento ha sido eliminado.",
            "success"
          );
        })
        .catch(() => {
          Swal.fire("ERROR, No se ha borrado la afición");
        });           
    }
  });
};

export default productoBorrar;

