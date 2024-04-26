import { useState } from "react";
import AddToDo from "../AddToDo";
import SearchToDo from "../SearchToDo";
import TodoList from "../TodoList";
import TodoItem from "../TodoItem";
function Todo() {
  const [todos, setTodos] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  let filteredTodos = todos.filter((todo) => {
    return todo.title
      .toLowerCase()
      .trim()
      .includes(searchQuery.toLowerCase().trim());
  });
  return (
    <>
      <h2>Todo React App</h2>
      <AddToDo todos={todos} setTodos={setTodos}/>
      <hr />
      <SearchToDo setSearchQuery = {setSearchQuery}/>
      <h3>Todo List</h3>
      <TodoList>
        {filteredTodos && filteredTodos.map((todo)=>{
            return <TodoItem key={todo.id} todo={todo} setTodos={setTodos}/>
        })}
      </TodoList>
    </>
  );
}

export default Todo;
