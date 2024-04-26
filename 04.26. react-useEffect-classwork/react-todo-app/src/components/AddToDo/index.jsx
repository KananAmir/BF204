import PropTypes from "prop-types";
import { useState } from "react";
import TodoItem from "../../classes/TodoItem";

function AddToDo({ todos, setTodos }) {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (inputValue.trim() == "") {
          setError(true);
        } else {
          setTodos([...todos, new TodoItem(inputValue)]);
          setInputValue("");
          setError(false);
        }
      }}
    >
      <input
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        type="text"
        placeholder="enter new todo"
        value={inputValue}
      />
      <p style={{ color: "red", display: error ? "block" : "none" }}>
        Input is Required
      </p>
      <button type="submit">Add</button>
    </form>
  );
}

AddToDo.propTypes = {
  todos: PropTypes.array,
  setTodos: PropTypes.func,
};

export default AddToDo;
