import { useState, useEffect } from 'react'
import '../estilos/Cuerpo.css'
import servicioProductos from '../servicios/servicioProductos'

function Cuerpo({ addProduct }) {
  const [productosBackend, setProductosBackend] = useState([])

  useEffect(() => {
    servicioProductos.getAll()
      .then(res => setProductosBackend(res.data || []))
      .catch(() => alert('No se pudieron cargar los productos'))
  }, [])

  return (
    <div className="container">
      {productosBackend.map((item, index) => (
        <div key={index}>
          <img src={item.url} alt={item.nombre}/>
          <h3>{item.nombre}</h3>
          <p>Precio: {item.precio} €</p>
          <button onClick={() => addProduct(item)}>Añadir al carrito</button>
        </div>
      ))}
    </div>
  )
}

export default Cuerpo
