import React, { useContext } from "react";
import { MainContext } from "../../context/mainContext";
import ProductsTable from "../ProductsTable";
import SearchProducts from "../SearchProducts";

const Products = () => {
  return (
    <div>
      <h1>Products Table</h1>
      <SearchProducts />
      <ProductsTable />
    </div>
  );
};

export default Products;
