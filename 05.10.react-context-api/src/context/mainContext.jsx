import { createContext, useEffect, useState } from "react";
import controller from "../services";

export const MainContext = createContext(null);

const MainProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    controller.getAllData("products").then((res) => {
      setProducts(res.data);
    });
  }, []);

  const filteredProducts = products.filter((q) => {
    return q.title
      .toLowerCase()
      .trim()
      .includes(searchQuery.trim().toLowerCase());
  });

  const data = {
    products,
    setProducts,
    filteredProducts,
    searchQuery,
    setSearchQuery,
  };

  return <MainContext.Provider value={data}>{children}</MainContext.Provider>;
};

export default MainProvider;
