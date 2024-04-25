import Header from "./layouts/header";
import Cards from "./components/cards";
import Footer from "./layouts/footer";
import { products } from "./data/db";

function App() {
  let fullName = "Kanan Amirov";
  return (
    <>
      <Header fullName={fullName} />
      <Cards products={products} />

      <Footer />
    </>
  );
}

export default App;
