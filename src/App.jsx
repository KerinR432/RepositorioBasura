//*IMPORTACIONES
import { useState } from 'react'
import Cuerpo from './componentes/Cuerpo'
import Menu from './componentes/Menu';
import Footer from './componentes/Footer'
import './estilos/App.css'
import { Routes, Route } from 'react-router-dom';

import Autor from './componentes/Autor';
import Detalles from './componentes/Detalles';
import Formulario from './componentes/Formulario';
import AvatarIA from './componentes/AvatarIA';
import Admin from './componentes/Admin';
import Bienvenido from './componentes/Bienvenido';

function App() {
  //* CODIGO JAVASCRIPT

  const [total, setTotal] = useState(0);
  const [producto, setProductos] = useState([]);

  const activarClikc = () => {
    console.log("Click en la vikinga");
      alert("Hola, soy sif tu asistenta. ¿En que batalla te ayudo hoy?")
  }

  return (
    <>

      <Menu total={total} producto={producto} />
      <AvatarIA onClick={activarClikc}></AvatarIA>

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
    <Route path='/bienvenido'element={<Bienvenido></Bienvenido>} ></Route>
    <Route path='/detalles/:id' element={<Detalles></Detalles>}></Route>
    <Route path='/formulario' element={<Formulario></Formulario>}></Route>
    <Route path='/admin' element={<Admin></Admin>}></Route>
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
