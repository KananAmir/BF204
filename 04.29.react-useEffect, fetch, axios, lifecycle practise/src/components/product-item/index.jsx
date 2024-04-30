import DeleteProduct from "../delete-product";

const ProductItem = ({ product, products, setProducts }) => {
  return (
    <li>
      <span>
        {product.productName}
        <DeleteProduct
          product={product}
          products={products}
          setProducts={setProducts}
        />
      </span>
    </li>
  );
};

export default ProductItem;
