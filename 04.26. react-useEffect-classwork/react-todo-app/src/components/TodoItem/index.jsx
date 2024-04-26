import PropTypes from "prop-types";
import moment from "moment";
import DeleteToDo from "../DeleteToDo";
import MarkToDo from "../MarkToDo";
function TodoItem({ todo, setTodos }) {
  return (
    <li>
      <span style={{ textDecoration: todo.isDone ? "line-through" : "none" }}>
        <b>{todo.title}, </b>
        <i>{moment(todo.createdAt).format("MMM Do YY, h:mm a")}</i>
      </span>
      <MarkToDo id={todo.id} setTodos={setTodos} />
      <DeleteToDo id={todo.id} setTodos={setTodos} />
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    isDone: PropTypes.bool.isRequired,
    createdAt: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.instanceOf(Date),
    ]).isRequired,
  }),
  setTodos: PropTypes.func,
};

export default TodoItem;
