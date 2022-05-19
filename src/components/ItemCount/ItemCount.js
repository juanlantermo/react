import React, {useState} from 'react'

const ItemCount = ({stock}) => {
    const [counter, setCounter] = useState(1)

    const sumar = () => {
        if(counter < stock){
            setCounter(counter +1)
        }
    }

    const restar = () => {
        if(counter > 0){
            setCounter(counter -1)
        }
    }

    return (
    <div>
        <button onClick={sumar} className="addCarrito">+</button>
        <span>{counter}</span>
        <button onClick={restar} className="addCarrito">-</button>
    </div>
    )
}

export default ItemCount