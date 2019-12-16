import React from "react";
import TodoListContainer from "./ToDoListContainer";

const Nav = (props) => (
  <div className="nav">
    <TodoListContainer 
      allTodoList={props.allTodoList}
      selectTodoList={props.selectTodoList}
    />    
    <button className="addTodoListBtn" onClick="">목록추가</button>
  </div>
);

export default Nav;
