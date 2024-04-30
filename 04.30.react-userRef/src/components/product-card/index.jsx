const ProductCard = ({ product }) => {
  console.log(product);
  return (
    <div>
      {product.title} <span>{product.isNew && "salam"}</span>
      <span>
        Price:{" "}
        {product.discountPercent
          ? product.price - (product.price * product.discountPercent) / 100
          : product.price}
      </span>
    </div>
  );
};

export default ProductCard;
