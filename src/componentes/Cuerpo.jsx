import { useState } from 'react'
import '../estilos/Cuerpo.css'
import { useEffect } from 'react';
import servicioProductos from '../servicios/servicioProductos';
import Footer from './Footer';
import { Link } from 'react-router-dom';
function Cuerpo({ total, setTotal,producto, setProductos }) {
    //codigo javascript
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


    function aumentarCantidad(productoSelecionado) {
        //! esto esta mal = tatal = total +1
        setTotal(total + productoSelecionado.precio)
        setProductos(prev => [...prev, productoSelecionado.nombre])
    }



    return (
        <>
            <main className='cards-container'>

                {imagenesUrls.map((img, index) => (
                    <div className='card' 
                    key={index}
                    style={{animationDelay: `${index * 0.1}s`}}
                    >
                    <Link to={`/detalles/${img.id}`}>
                        <img src={img.url} alt={img.nombre} />
                    </Link>
                        <h3 className='titulo'>{img.nombre}</h3>
                        <p className='card-description'>Un elevador espacial a tu mesa, con la mejor carne de Moa que jamas hayas provado</p>
                        <p className='card-price' >precio: {img.precio}cR</p>
                    
                        <button className='btoEnviar' onClick={() => aumentarCantidad(img)}>Pulsame</button>

                    </div>
                ))}
            </main>
            <div className='footer'>
            <Footer producto={producto} setProductos={setProductos} setTotal={setTotal} ></Footer>
            </div>
        </>
    )
}


export default Cuerpo