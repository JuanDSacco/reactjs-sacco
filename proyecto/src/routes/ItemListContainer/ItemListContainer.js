import { useState, useEffect } from "react";
import Item from "../Item/Item";


const ItemListContainer = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch(`/Data/data.json`)
        .then((res) => res.json())
        .then((obj) => setPosts(obj))
    }, []);



    return (
        <div className="">
            {posts.map((productos) => <Item data = {productos} key = {productos.id}></Item>)}
        </div>
    )
};

export default ItemListContainer;
