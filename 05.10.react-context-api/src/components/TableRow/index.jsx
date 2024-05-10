import React from "react";
import DeleteProduct from "../DeleteProduct";

const TableRow = ({ product }) => {
  return (
    <tr>
      <td>{product.id}</td>
      <td>{product.title}</td>
      <td>{product.price}</td>
      <td>
        <DeleteProduct id={product.id} />
      </td>
    </tr>
  );
};

export default TableRow;
