import { useState } from 'react'
import { Link } from "react-router-dom"
import '../estilos/Menu.css'

function Menu({ productos, total, removeOne }) {
  const [carritoVisible, setCarritoVisible] = useState(false)

  return (
    <div className="menu-superior">
      <img src="/imagenes/supermercado.png" alt="Supermercado" className="icono-supermercado" />

      {/* LINKS estilo UFC */}
      <nav className="menu-links">
        <Link to="/">Inicio</Link>
        <Link to="/detalles">Detalles</Link>
        <Link to="/autor">Autor</Link>
        <Link to="/admin">Admin</Link>
      </nav>

      <span className="carrito-texto">
        {productos.length} items - {productos.reduce((acc, p) => acc + Number(p.precio), 0)}€
      </span>


      <button className="toggle-carrito" onClick={() => setCarritoVisible(v => !v)}>🛒</button>

      {carritoVisible && (
        <div className="carrito-productos">
          <h4>Carrito</h4>
          {productos.length > 0 ? (
            <ul>
              {productos.map(p => (
                <li key={p.id} style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>{p.nombre} {p.cantidad > 1 ? `x${p.cantidad}` : ''}</span>
                  <button onClick={() => removeOne(p.id)}>−</button>
                </li>
              ))}
            </ul>
          ) : <p>No hay productos en el carrito.</p>}
        </div>
      )}
    </div>
  )
}

export default Menu
