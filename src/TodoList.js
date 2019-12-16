import React from "react";

const TodoList = props => {
  return (
    <div className="todoList" onClick={() => props.selectTodoList(props.todoList)}>
      {props.todoList.title}
    </div>
  );
};

export default TodoList;
