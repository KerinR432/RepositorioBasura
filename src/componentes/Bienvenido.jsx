import '../estilos/Bienvenido.css'
import UnggoyFrente from '../assets/yayac-el-destructor-Photoroom.png'
import Unggoy from '../assets/gruntDeEspalda.png'
import UnggoyTitulo from '../assets/sinFondoUnggoy.png'
import SangheiliAtras from '../assets/Sanghelie-de-espalda.png'
import SangheiliTitulo from '../assets/Sangheili-sinFondo.png'
import SangheiliDelante from '../assets/Inquisidor-sinFondo.png'
import JiralhaeAtras from '../assets/Jiralhanae-de-espalda.png'
import JiralhaeTitulo from '../assets/Jiralhanae-titulo-sin-fondo.png'
import JoralhaeDelante from '../assets/Jiralhanae-casique-sin-fondo.png'
import LeckgoloDeEspalda from '../assets/Leckgolo-Espalda.png'
function Bienvenido() {
    return (
        <>
            <div className="Bienvenido-container">
                <h1>Bienvenido a Nuestra Tienda de alimentos</h1>
                <main className="cards-container-bien">
                    <div class="card-bienvenido">
                        <div class="wrapper">
                            <img src={Unggoy} class="cover-image" />
                        </div>

                        <img src={UnggoyTitulo} alt="" className='title' />

                        <img src={UnggoyFrente} alt="" className='character' />
                    </div>
                    <button>Ir a tienda</button>
                </main>

                <main className="cards-container-bien">
                    <div class="card-bienvenido">
                        <div class="wrapper">
                            <img src={SangheiliAtras} class="cover-image" />
                        </div>

                        <img src={SangheiliTitulo} alt="" className='title' />

                        <img src={SangheiliDelante} alt="" className='character' />
                    </div>
                    <button>Ir a tienda</button>
                </main>

                <main className="cards-container-bien">
                    <div class="card-bienvenido">
                        <div class="wrapper">
                            <img src={JiralhaeAtras} class="cover-image" />
                        </div>

                        <img src={JiralhaeTitulo} alt="" className='title' />

                        <img src={JoralhaeDelante} alt="" className='character' />
                    </div>
                    <button>Ir a tienda</button>
                </main>
            
                <main className="cards-container-bien">
                    <div class="card-bienvenido">
                        <div class="wrapper">
                            <img src={LeckgoloDeEspalda} class="cover-image" />
                        </div>

                        <img src={JiralhaeTitulo} alt="" className='title' />

                        <img src={JoralhaeDelante} alt="" className='character' />
                    </div>
                    <button>Ir a tienda</button>
                </main>             
            </div>

        </>
    );
}

export default Bienvenido;