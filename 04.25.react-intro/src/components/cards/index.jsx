import PropTypes from "prop-types";
import "./index.scss";
import TableRow from "../card";
// import Card from "../card";

const Table = ({ products }) => {
  console.log(products);
  return (
    <div id="cards">
      {/* {products.map((product) => {
        return <Card product={product} key={product.id} />;
      })} */}

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
            <th>Photo</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return <TableRow product={product} key={product.id} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  products: PropTypes.array,
};

export default Table;
