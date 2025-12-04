import '../estilos/Autor.css' // Ajusta la ruta según tu estructura

import { Link } from 'react-router-dom';
function Autor() {
    return (
        <>
            <div className="menu-superior">
                {/* Icono a la izquierda */}
                <img
                    src="/imagenes/supermercado.png"
                    alt="Supermercado"
                    className="icono-supermercado"
                />

                {/* ---- NUEVO: Opciones Inicio | Autor ---- */}
                <nav className="nav-opciones">
                    <Link to="/">Inicio</Link>
                    <Link to="/autor">Autor</Link>
                </nav>
            </div>
            <div className="autor-contenido">
                <img
                    src="/imagenes/yo.jpg"
                    className="imagen-superior-izquierda"
                />
                <div className="autor-texto">
                    <h1>Mohamed Bada</h1>
                    <p>Deporte</p>
                </div>
            </div>

        </>
    )
}

export default Autor