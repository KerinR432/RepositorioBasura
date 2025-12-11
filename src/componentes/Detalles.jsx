import { useParams } from 'react-router-dom'
import '../estilos/detalles.css'
import servicioProductos from '../servicios/servicioProductos';
import { useEffect, useState } from 'react';
function Detalles(){
    const idProducto = useParams().id
    const [infoProducto, setInfoProducto] = useState({id:'',url: '',nombre:'',precio:''})
        useEffect(() => {
            servicioProductos.getId(idProducto)
                .then((response) => {
                    setInfoProducto(response.data) 
                })
                .catch((error) => {
    
                    alert(error)
                });
        }, []);

    return(
        <>
        <header className="cabecera">
            <h1>{infoProducto.nombre}</h1>
        </header>
        <main className="cuerpo">
            <article className="izquierda">
                <img src={infoProducto.url} alt="" />
            </article>
            <article className="derecha">
                <h2>{infoProducto.precio}</h2>
            </article>
        </main>
        </>
    )
}

export default Detalles