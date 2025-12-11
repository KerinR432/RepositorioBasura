import { Children } from "react";
import React from "react";
const Modal = ({isOpen,onClose,Children}) => {
    if(!isOpen) {
        return null
    }

    return(
        <>
        <div className="contendor-model">
            <div className="model-contenido">
                <button className="cerrar-model" onClick={onClose}>X</button>
                {Children}
            </div>
        </div>
        </>
    )
}
export default Modal;