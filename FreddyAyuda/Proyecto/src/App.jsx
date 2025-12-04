import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import Menu from './componentes/menu'
import Footer from './componentes/footer'
import Cuerpo from './componentes/cuerpo'
import Autor from './componentes/autor'
import Admin from './componentes/admin'
// import Detalles from './componentes/detalles' // nueva página de detalles

function App() {
  // Estado de productos
  const [productos, setProductos] = useState([])

  // Total simple sumando precios
  const total = productos.reduce((acc, p) => acc + p.precio, 0)

  // Función para añadir un producto
  const addProduct = ({ nombre, precio }) => {
    setProductos(prev => [...prev, { id: Date.now(), nombre, precio }])
  }

  // Función para eliminar un producto por ID
  const removeOne = (id) => {
    setProductos(prev => prev.filter(p => p.id !== id))
  }

  // Eliminar todos los productos de un nombre
  const removeAllByName = (nombre) => {
    setProductos(prev => prev.filter(p => p.nombre !== nombre))
  }

  // Vaciar todo el carrito
  const clearCart = () => setProductos([])

  return (
    <>
      <Menu productos={productos} total={total} removeOne={removeOne} />

      <Routes>
        <Route path="/" element={<Cuerpo addProduct={addProduct} />} />
        {/* <Route path="/detalles" element={<Detalles />} /> */}
        <Route path="/autor" element={<Autor />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/" element={<Footer productos={productos} removeOne={removeOne} removeAllByName={removeAllByName} clearCart={clearCart} />} />
      </Routes>

    </>
  )
}

export default App
