import React from 'react';
import {Card, Button} from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount';


export default function Item ({producto}) {
  return (
    <Card style={{ width: "18rem", border: "1px solid #ccc" }}>
      <Card.Img variant="top" src={producto.image} className="img-fluid" />
      <Card.Body>
        <Card.Title>{producto.title}</Card.Title>
        <Card.Text>
          <p>Stock: {producto.stock}</p>
          <p>Price : {producto.price}</p>
        </Card.Text>
        <ItemCount stock={producto.stock}/>
        <Button variant="primary" className='verMas'>Ver mas</Button>
      </Card.Body>
    </Card>
  );
}