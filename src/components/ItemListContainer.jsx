import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";
import data from "../data/data.json" // Ajusta la ruta según la ubicación real de data.json


const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const [titulo, setTitulo] = useState("Productos");
    const categoria = useParams().categoria;

    useEffect(() => {
        if (categoria) {
            // Filtra los productos según la categoría seleccionada
            const productosFiltrados = data.filter((producto) => producto.categoria === categoria);
            setProductos(productosFiltrados);
            setTitulo(`Productos - ${categoria}`);
        } else {
            // Si no se selecciona una categoría, muestra todos los productos
            setProductos(data);
            setTitulo("Productos");
        }
    }, [categoria]);

    return (
        <div>
            <ItemList productos={productos} titulo={titulo} />
        </div>
    );
}

export default ItemListContainer;
