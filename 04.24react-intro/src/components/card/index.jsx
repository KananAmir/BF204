import PropTypes from "prop-types";

const TableRow = (props) => {
  const { product } = props;
  return (
    <tr>
      <td>{product.id}</td>
      <td>{product.title}</td>
      <td>{product.price}</td>
      <td>{product.category}</td>
      <td>
        <img src={product.image} alt={product.title} />
      </td>
    </tr>
  );
};

TableRow.propTypes = {
  product: PropTypes.object,
};

export default TableRow;
