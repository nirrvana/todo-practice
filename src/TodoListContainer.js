import React from "react";
import TodoList from "./TodoList";

const TodoListContainer = props => (
  // console.log(props)
  <div>
    {props.allTodoList.map(todoList => (
      <div>
        <TodoList 
          selectTodoList={props.selectTodoList} 
          todoList={todoList}
          // currentList={props.currentList} 
        />
      </div>
    ))}
  </div>
);

export default TodoListContainer;
