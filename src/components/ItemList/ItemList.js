import Item from "./Item/Item";

export default function ItemList({products}){
    return(
        <div className="ItemList">
        {products.map((product) => (
            <Item product={product} key={product.id}/>
          )
        )}
      </div>
    )
}