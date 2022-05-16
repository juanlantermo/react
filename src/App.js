import Navbarfun from "./components/Navbar/Navbar";
import ItemCount from "./components/ItemCount/ItemCount";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { Container } from "react-bootstrap";
function App() {
  return (
    <div className="App">
      <Navbarfun category1={"Contacto"} category2={"Nosotros"} category3={"Productos"}/>
      <h1>Primer desafío React</h1>
      <ItemListContainer/>
      <Container>
      <ItemCount/>
      </Container>
    </div>
  );
}
export default App;
