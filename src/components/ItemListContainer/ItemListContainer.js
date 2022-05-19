import React, { useEffect, useState }  from 'react'
import ItemList from "../ItemList/ItemList";
const ItemListContainer=()=>{


    const [listaProductos, setListaProductos] = useState([])
    const [cargando, setCargando] = useState(false)
    const productos = [
        {id: '1', title: "Teclado Keychron K8",stock: '3',price: '25000',image: "images/keychron-k8.jpeg"},
        {id:'02',title: "Mouse Steelseries Rivals 300",stock: '2',price: '10000',image: "images/steelseries-rivals.webp"},
        {id: '3', title: "Mousepad SteelSeries QCK XXL",stock: '10',price: '1500',image: "images/steelseries-qck.jpeg"},
        {id: '4', title: "Macbook M1 Pro 2022 16,2' Retina",stock: '1', price: '500000', image: "images/macbook.jpeg"},
    ]
    

    const traerProd = new Promise ((resolve, reject ) => {
        //acciones
        let condition = true
        setTimeout(()=> {
        if(condition){
            resolve(productos)
        }else{
            reject('Salio mal :(')
        }
        }, 2000)
    })
    
    useEffect(()=>{
        setCargando(true)
        traerProd
        .then((res)=> setListaProductos(res))
        .catch((error)=> console.log(error))
        .finally(()=> setCargando(false))
       // eslint-disable-next-line
    }, [])
    
    return(
        <div>
        {cargando ? <p>Cargando...</p> : <ItemList listaProductos={listaProductos}/>}
    </div>
    )
}
export default ItemListContainer