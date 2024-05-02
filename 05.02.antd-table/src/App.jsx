import { useEffect, useState } from "react";
import "./App.css";
import ProductsTable from "./components/products-table";
import { getAllData } from "./services";
import Spinner from "./components/spinner";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllData()
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <ProductsTable products={products} setProducts={setProducts} />
      )}
    </>
  );
}

export default App;
