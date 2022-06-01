import {Card} from "react-bootstrap"
import AddButton from "../AddButton/AddButton";
export default function ItemDetail ({item}) {
  return (
    <Card>
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
         Detalle de cada producto
        </Card.Text>
        <h3>$ {item.price}</h3>
        <AddButton />
      </Card.Body>
    </Card> 
  );
}