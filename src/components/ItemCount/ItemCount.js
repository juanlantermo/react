import  React  from "react"
export default function ItemCount(){
    const [text]= React.useState("Agregar al carrito")
    const [count,setCount]=React.useState(0)

    const handleRest=()=>{
        if(count > 0) {
        setCount( count - 1)
        }
     }
    return(
        <div>
        {text}
        <input className="addCarrito" type="button" value="+" onClick={() => setCount(count + 1)} />
         {count}
        <input className="addCarrito" type="button" value="-" onClick={handleRest} />
        </div>
    ); 
}