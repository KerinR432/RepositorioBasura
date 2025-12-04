import '../estilos/Footer.css'

function Footer({ productos, removeAllByName, clearCart }) {

  // Para evitar duplicados en la visualización, mostramos solo 1 por nombre
  const productosUnicos = Array.from(
    new Map(productos.map(p => [p.nombre, p])).values()
  );

  return (
    <div className="footer">
      {productos.length > 0 ? (
        <>
          <ul>
            {productosUnicos.map(p => {
              // Contar cuántas veces aparece este producto en el carrito
              const cantidad = productos.filter(prod => prod.nombre === p.nombre).length;

              return (
                <li key={p.nombre} className="producto-item">
                  <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', gap:'8px'}}>
                    <span>{p.nombre} x{cantidad}</span>
                    <button onClick={() => removeAllByName(p.nombre)}>×</button>
                  </div>
                </li>
              )
            })}
          </ul>
          <button onClick={clearCart} style={{marginTop:'10px'}}>Vaciar carrito</button>
        </>
      ) : <p>No hay productos ahora mismo</p>}
    </div>
  )
}

export default Footer
