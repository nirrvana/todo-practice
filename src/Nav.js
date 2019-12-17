import React from "react";
import TodoListContainer from "./TodoListContainer";

class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isClicked: false
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleClick() {
    this.setState({
      isClicked: true
    })
  }

  handleKeyUp(e) {
    if(e.key === 'Enter') {
      console.log(e.target.value);
      this.props.addTodoList(e.target.value);
      this.setState({ 
        isClicked: false
      })
      e.target.value = '';
    }
  }

  render() {
    return (
      <div className="nav">
      <TodoListContainer 
        allTodoList={this.props.allTodoList}
        selectTodoList={this.props.selectTodoList}
        // currentList={this.props.currentList}
      />
      
      <input className={'addTodoList ' + (this.state.isClicked ? 'show':'')} onKeyUp={this.handleKeyUp}></input>    
      <button className="addTodoListBtn" onClick={this.handleClick}>목록추가</button>
    </div>
    )
  }
}


export default Nav;
