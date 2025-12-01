import '../estilos/Menu.css';
import { useState } from "react";
import { Link } from 'react-router-dom'

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
        <img src="../img/space-elevator.jpeg" alt="" className='logo' />
        <span className='total-precio'>{producto.length} : {total}€ </span>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/Autor">Autor</Link></li>
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
