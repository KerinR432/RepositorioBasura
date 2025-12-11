import '../estilos/Menu.css';
import { useState } from "react";
import { Link } from 'react-router-dom'
import unggoyLogo from '../assets/logo-unggoy.png'

function Menu({ total, producto }) {

  const [mostrar, setMostrar] = useState(false);
  // Contador de productos
  const conteo = {};
  producto.forEach(p => {
    conteo[p] = (conteo[p] || 0) + 1;
  });
  return (
    <>
      <div className='menu'>
        <img src={unggoyLogo} alt="Logo de la cadena de comida / Unggoy" className='logo' />
        <span className='total-precio'>{producto.length} : {total}€ </span>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/Autor">Autor</Link></li>
        <li><Link to="/Formulario">Formulario</Link></li>
        <li><Link to="/Admin">Admin</Link></li>
        <li><Link to="/Bienvenido">Bienvenido</Link></li>
        <button onClick={() => setMostrar(!mostrar)} className='carrito-icon'>🛒</button>
      </div>

      {(mostrar && producto.length > 0) && (
        <div id='productos'>
          {Object.entries(conteo).map(([nombre,cantidad],idx) =>(
            <div key={idx}>{nombre} x {cantidad}</div>
          ))}
        </div>
      )}
    </>
  );
};

export default Menu;
