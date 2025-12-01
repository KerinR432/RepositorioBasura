import { useState } from 'react'
import '../estilos/Cuerpo.css'
import { useEffect } from 'react';
import servicioProductos from '../servicios/servicioProductos';
import Footer from './Footer';
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
                    <div className='card' key={index}>
                        <img src={img.url} alt={img.nombre} />
                        <h3>{img.nombre}</h3>
                        <p className='card-description'>Un elevador espacial a tu mesa, con la mejor carne de Moa que jamas hayas provado</p>
                        <p className='card-price' >precio: {img.precio}€</p>
                        <button onClick={() => aumentarCantidad(img)}>Pulsame</button>

                    </div>
                ))}
            </main>
            <div>
            <Footer producto={producto} setProductos={setProductos} setTotal={setTotal} ></Footer>
            </div>
        </>
    )
}


export default Cuerpo