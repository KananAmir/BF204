import PropTypes from "prop-types";
function DeleteToDo({ id, setTodos }) {
  function handleDelete(){
    if(window.confirm("are you sure to delete?")){
      setTodos((todos) => {
        return todos.filter((todo) => {
          return todo.id != id;
        });
      });
    }
  }
  return (
    <button
      onClick={handleDelete}    >
      Delete
    </button>
  );
}
DeleteToDo.propTypes = {
  id: PropTypes.string.isRequired,
  setTodos: PropTypes.func,
};

export default DeleteToDo;
