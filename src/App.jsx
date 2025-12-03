//*IMPORTACIONES
import { useState } from 'react'
import Cuerpo from './componentes/Cuerpo'
import Menu from './componentes/Menu';
import Footer from './componentes/Footer'
import './estilos/App.css'
import { Routes, Route } from 'react-router-dom';

import Autor from './componentes/Autor';
import Detalles from './componentes/Detalles';
function App() {
  //* CODIGO JAVASCRIPT

  const [total, setTotal] = useState(0);
  const [producto, setProductos] = useState([]);

  return (
    <>

      <Menu total={total} producto={producto} />

  <Routes>
    <Route
      path="/"
      element={
        <Cuerpo
          total={total}
          producto={producto}
          setTotal={setTotal}
          setProductos={setProductos}
        />
      }
    />
    <Route path="/autor" element={<Autor />} />
    <Route path='/'></Route>
    <Route path='/detalles' element={<Detalles></Detalles>}></Route>
  </Routes>

      {/* <div>
        <Menu total={total} producto={producto} ></Menu>

      </div>
      <div>
        <Cuerpo total={total} producto={producto} setTotal={setTotal} setProductos={setProductos} ></Cuerpo>
      </div> */}

    </>
  )
}

export default App
