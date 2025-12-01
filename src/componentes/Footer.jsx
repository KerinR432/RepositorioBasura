import { useEffect,useState } from 'react';
import '../estilos/footer.css'
import servicioProductos from '../servicios/servicioProductos';

function Footer({ producto, setProductos, setTotal }) {
    //? esto lo copie del cuerpo, para poder recuperar el precio de la mejor forma.
    let mapaProductos = [...new Set(producto)];
    const [imagenesUrls, setImageUrls] = useState([])
    useEffect(() => {
            servicioProductos.getAll()
                .then((response) => {
                    setImageUrls(response.data);
                })
                .catch((error) => {
    
                    alert(error)
                });
        }, []);

    function eliminar(p) {
        //*devuelve el nombre con precio del producto buscado.
        const productoConPrecio = imagenesUrls.find(img => img.nombre === p);
        //*esta operación que valora si producto no es nullo, si lo es le damos un valor '0'.
        const precioProducto = productoConPrecio ? productoConPrecio.precio : 0;
        //*Buscamos en todo el producto concretamnete el 'NOMBRE' y devolvemos el tamaño.
        const cantidad = producto.filter(item => item === p).length;
        //* Acutiliza el array guardado aquellos que no sean 'NOMBRE'.
        setProductos(prev => prev.filter(item => item !== p));
        //*Actualiza el producto, restado el total, del precio extraido de imagenes y
        //*muntiplicandolo por la cantidad de ese mismo producto.
        setTotal(prevTotal => prevTotal - (precioProducto * cantidad));
    }


    return (
        <>
            <div id='footer'>
                {mapaProductos.map((p, i) => (
                    <div key={i}>
                        {p} <button onClick={() => eliminar(p)}>✖️</button>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Footer