import { useContext } from "react";
import { MainContext } from "../../context/mainContext";
import controller from "../../services";

const DeleteProduct = ({ id }) => {
  const { products, setProducts } = useContext(MainContext);

  const handleDelete = async () => {
    const response = await controller.deleteDataById("products", id);
    if (response.status === 200) {
      setProducts([...products].filter((q) => q.id != id));
    }
  };
  return (
    <button style={{ backgroundColor: "red" }} onClick={handleDelete}>
      DELETE
    </button>
  );
};

export default DeleteProduct;
