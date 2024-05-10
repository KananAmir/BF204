import { useContext } from "react";
import { MainContext } from "../../context/mainContext";
import TableRow from "../TableRow";

const ProductsTable = () => {
  const { filteredProducts, setProducts } = useContext(MainContext);

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Price</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {filteredProducts.length > 0 &&
          filteredProducts.map((product) => {
            return <TableRow product={product} key={product.id} />;
          })}
      </tbody>
    </table>
  );
};

export default ProductsTable;
