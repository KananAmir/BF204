import { useEffect, useState } from "react";
import "./App.css";
import { deleteDataById, getAllData } from "../services";
import { endpoints } from "../services/constant";

function App() {
  const [products, setProducts] = useState(null);

  console.log(products);
  useEffect(() => {
    getAllData(endpoints.products).then((res) => {
      setProducts(res.data.data);
    });
  }, []);

  const handleDelete = async (id) => {
    try {
      console.log(id);
      // const res = await deleteDataById(endpoints.products, id);
      // if (res.status === 200) {
      //   setProducts([...products].filter((q) => q.id !== id));
      // }
      deleteDataById(endpoints.products, id).then((res) => {
        if (res.status === 200) {
          setProducts([...products].filter((q) => q.id !== id));
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <ul>
        {products &&
          products.map((p) => {
            return (
              <li key={p.id}>
                <span>{p.title}</span>
                <button onClick={() => handleDelete(p.id)}>DELETE</button>
              </li>
            );
          })}
      </ul>
    </>
  );
}

export default App;
