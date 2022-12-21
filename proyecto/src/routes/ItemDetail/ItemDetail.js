import { useState } from "react";
import './itemDetail.css' 
import ItemCount from '../ItemCount/ItemCount'

function ItemDetail ({productos}) {
    const [contador, setContador] = useState(0)

    const botonAumento = () => {
        setContador(contador +1)
    }
    const botonResta = () => {
        setContador(contador -1)
    }

    return (
        <div className="detail-conteiner">
            <div className="detail-item-container">
                <h3 className="titulo-detail">{productos.nombre}</h3>
                <img className="imgF" src={productos.imagen} alt={productos.id}></img>
                <p className="detalle-precio">${productos.precio}</p>
                <ItemCount productos={productos}/>
            </div>
        </div>
    )
}; 

export default ItemDetail;
