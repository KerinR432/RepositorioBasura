
import '../estilos/Autor.css'
function Autor() {

    return (
        <>
            <main className='Autor-main'>
                <aside className="imagenLado">
                    <img src="../public/Halo_Grunt_Ad.jpeg" alt="imagenes-de-referncia" />
                </aside>
                <article className='derecha'>
                    <aside className='arriba'>
                        <h1>CREADOR: HOLA SOY EL CREADOR DEL CARRITO</h1>
                        <h2>ME LLAMO: YA-KA</h2>
                    </aside>

                    <aside className='izquierda'>
                        <p>
                            Aqui va mas que todo texto de ejemplo de lo que es esta pagina
                            es una pagina dedicada pura y duramente para comprar Hamburgesas
                            y comidas de la gastronomia humana, donde aunque parezcna grandes
                            tiene unos alimentos expisitos, que cualquier Elite quedaria encatado
                        </p>
                    </aside>

                </article>
            </main>
        </>
    )
}

export default Autor;