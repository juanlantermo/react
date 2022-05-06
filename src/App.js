import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <h1>Primer desafío React</h1>
      <ItemListContainer greeting1={"Aquí van a estar los productos"} greeting2={"Acá también"}/>
    </div>
  );
}
export default App;
