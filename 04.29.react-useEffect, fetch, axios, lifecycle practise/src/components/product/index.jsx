import { useEffect, useState } from "react";
import ProductLists from "../product-lists";
import { getAllCustomers } from "../../services";
import ProductItem from "../product-item";
import SortByName from "../sort-by-name";
import SearchByName from "../search-by-name";
import SortByPrice from "../sort-by-price";
const Product = () => {
  const [products, setProducts] = useState([]);
  const [productsCopy, setProductsCopy] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const filteredProducts = products.filter((q) => {
    return q.productName
      .toLowerCase()
      .trim()
      .includes(searchQuery.trim().toLowerCase());
  });

  useEffect(() => {
    getAllCustomers()
      .then((response) => {
        setProducts(response);
        setProductsCopy(response);
        console.log(response);
      })
      .catch();
  }, []);

  return (
    <>
      <SearchByName setSearchQuery={setSearchQuery} />

      <SortByName
        products={products}
        setProducts={setProducts}
        productsCopy={productsCopy}
      />
      <SortByPrice
        products={products}
        setProducts={setProducts}
        productsCopy={productsCopy}
      />
      <ProductLists>
        {filteredProducts &&
          filteredProducts.map((item) => {
            return (
              <ProductItem
                key={item.id}
                product={item}
                products={filteredProducts}
                setProducts={setProducts}
              />
            );
          })}
      </ProductLists>
    </>
  );
};

export default Product;
