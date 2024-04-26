import PropTypes from "prop-types";

function TodoList({ children }) {
  return <ul>{children}</ul>;
}

TodoList.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
]).isRequired
};

export default TodoList;
