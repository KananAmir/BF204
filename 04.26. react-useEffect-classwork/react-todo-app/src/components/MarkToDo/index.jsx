import PropTypes from "prop-types";
function MarkToDo({ id, setTodos }) {
  function handleMark() {
    setTodos((todos) => {
      return todos.map((todo)=>{

        if(todo.id == id ){
          return {...todo, isDone: !todo.isDone}
        }
        return todo
      })
    });
  }
  return <button onClick={handleMark}>Mark</button>;
}

MarkToDo.propTypes = {
  id: PropTypes.string.isRequired,
  setTodos: PropTypes.func,
};

export default MarkToDo;
