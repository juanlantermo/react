import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
export default function Home () {
  return (
    <div className="App">
      <Header />
      
      <ItemListContainer title="Nuestros productos" />
      <Footer />
    </div>
  );
}