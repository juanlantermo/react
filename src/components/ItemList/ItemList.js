import React from "react";
import Item from "../Item/Item";

const ItemList = ({listaProductos})=>{
    return(
        <>
        <h3>Lista productos</h3>
        <div style={{display:'flex', justifyContent:'space-between', flexWrap:'wrap', alignItems:'center' }}>  
            {listaProductos.map((producto) => <Item producto={producto} key={producto.id}/> )}
         </div>
         </>
    )
}
export default ItemList