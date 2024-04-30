import DeleteProduct from "../delete-product";

const ProductItem = ({ product, products, setProducts }) => {
  return (
    <li>
      <p>
        <span>{product.productName}</span>
        <i> $ {product.price} </i>
        <DeleteProduct
          product={product}
          products={products}
          setProducts={setProducts}
        />
      </p>
    </li>
  );
};

export default ProductItem;
