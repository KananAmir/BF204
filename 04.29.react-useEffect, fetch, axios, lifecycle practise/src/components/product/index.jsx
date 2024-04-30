import { useEffect, useState } from "react";
import ProductLists from "../product-lists";
import { getAllCustomers } from "../../services";
import ProductItem from "../product-item";
const Product = () => {
  const [products, setProducts] = useState([]);
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
        console.log(response);
      })
      .catch();
  }, []);
  return ( <>
      <input
        type="text"
        onChange={(e) => {
          setSearchQuery(e.target.value);
          console.log(searchQuery);
        }}
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
    </>);};

export default Product;
