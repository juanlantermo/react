import Item from "./Item/Item";
import {products} from "../data/productos";
export default function ItemList({product}){
    return(
        <div className="ItemList">
        {products.map((product) => (
            <Item product={product} key={product.id}/>
          )
        )}
      </div>
    )
}