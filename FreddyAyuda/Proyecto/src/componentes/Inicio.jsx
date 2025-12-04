import { useState } from 'react'
import Menu from './menu'
import Cuerpo from './cuerpo'
import Footer from './footer'

function Inicio() {
    const [total, setTotal] = useState(0)
    const [productos, setProductos] = useState([])

    return (
        <>
            <Menu total={total} productos={productos} />

            <Cuerpo
                total={total}
                setTotal={setTotal}
                productos={productos}
                setProductos={setProductos}
            />

            <Footer
                productos={productos}
                setProductos={setProductos}
                setTotal={setTotal}
            />
        </>
    )
}

export default Inicio