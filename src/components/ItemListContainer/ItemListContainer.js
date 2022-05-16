import ItemList from "../ItemList/ItemList";
export default function ItemListContainer(){
    const task = new Promise ((resolve, reject) => {
        setTimeout(() => {
         resolve(ItemList);
        }, 2000)
        
      })
      task.then((result) => {
        console.log(result)
      }, err => {
        console.log(err)
      })
    return(
        <div>
        <ItemList/> 
      </div>
    )
}