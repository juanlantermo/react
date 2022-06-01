import {useNavigate} from "react-router-dom"
import { Card} from "react-bootstrap";
import AddButton from "../AddButton/AddButton";
export default function Item({ item }) {
  const navigate = useNavigate()
  return (
      <Card style={{ width: "18rem",padding:"20px",marginLeft:"60px" }} onClick={() => navigate(`/product/${item.id}`)}>
        <Card.Img variant="top" src={item.image} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>
           Descripcion del producto
          </Card.Text>
          <h3>$ {item.price}</h3>
          <AddButton />
        </Card.Body>
      </Card>
  );
}