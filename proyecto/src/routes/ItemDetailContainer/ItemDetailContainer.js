import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'



const ItemDetailContainer = () => {

    const [productos, setProductos] = useState([])
    const { id } = useParams();

    useEffect(() => {
        fetch('../Data/data.json')
            .then((res) => res.json())
            .then((data) => setProductos(data.find((item) => item.id === parseInt(id))))
    }, [id])


    return (
        <>
            <div className='div'>
                <ItemDetail productos={productos} />
            </div>
        </>
    )
}
export default ItemDetailContainer