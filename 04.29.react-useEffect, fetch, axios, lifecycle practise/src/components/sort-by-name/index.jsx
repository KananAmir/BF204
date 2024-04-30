import React from "react";

const SortByName = ({ products, setProducts, productsCopy }) => {
  return (
    <button
      onClick={(e) => {
        let sorted;

        if (e.target.textContent === "SortByNameAsc") {
          e.target.textContent = "SortByNameDesc";
          sorted = [...products].sort((a, b) =>
            a.productName.localeCompare(b.productName)
          );
        } else if (e.target.textContent === "SortByNameDesc") {
          e.target.textContent = "Default";
          sorted = [...products].sort((a, b) =>
            b.productName.localeCompare(a.productName)
          );
        } else {
          e.target.textContent = "SortByNameAsc";
          sorted = [...productsCopy];
        }
        setProducts(sorted);
      }}
    >
      SortByNameAsc
    </button>
  );
};

export default SortByName;
