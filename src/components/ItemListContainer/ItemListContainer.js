import { useState } from "react";
import { useEffect } from "react";
import {productos} from "../data/productos"
import ItemList from "../ItemList/ItemList";
export default function ItemListContainer(){

    // eslint-disable-next-line no-undef
    const [listaProductos, setListaProductos] = useState([])


    const task = new Promise ((resolve, reject) => {
        setTimeout(() => {
         resolve(productos);
        }, 2000)
      })
      useEffect(()=>{
        task
        .then((res)=>setListaProductos(res))
        .catch((err)=>console.log(err))
        // eslint-disable-next-line
    },[])
    return(
        <div>
        <ItemList ListaProductos= {listaProductos}/> 
      </div>
    )
   
}