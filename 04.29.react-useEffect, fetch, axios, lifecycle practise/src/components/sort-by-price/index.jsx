const SortByPrice = ({ products, setProducts, productsCopy }) => {
  return (
    <button
      onClick={(e) => {
        let sorted;

        if (e.target.textContent === "SortByPriceAsc") {
          e.target.textContent = "SortByPriceDesc";
          sorted = [...products].sort((a, b) => a.price - b.price);
        } else if (e.target.textContent === "SortByPriceDesc") {
          e.target.textContent = "Default";
          sorted = [...products].sort((a, b) => b.price - a.price);
        } else {
          e.target.textContent = "SortByPriceAsc";
          sorted = [...productsCopy];
        }
        setProducts(sorted);
      }}
    >
      SortByPriceAsc
    </button>
  );
};

export default SortByPrice;
