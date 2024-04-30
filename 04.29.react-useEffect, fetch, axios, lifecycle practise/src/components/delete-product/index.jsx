import { deleteDataById } from "../../services";

const DeleteProduct = ({ product, products, setProducts }) => {
  const handleDeleteProduct = (id) => {
    // console.log(id);
    deleteDataById(id).then((response) => {
      //   console.log(response);
      if (response.status === 200) {
        const filtered = products.filter((q) => q.id !== id);
        // console.log(filtered);\
        setProducts(filtered);
      }
    });
  };
  return (
    <button onClick={() => handleDeleteProduct(product.id)}>DELETE</button>
  );
};

export default DeleteProduct;
