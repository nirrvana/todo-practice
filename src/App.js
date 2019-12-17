import React from "react";
import Nav from "./Nav";
import View from "./View";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allTodoList: [
        {
          title: "내일일은 내일모레",
          done: [],
          haveTo: [1, 3, 5]
        },
        {
          title: "죽음과 결혼은 미룰수록 좋다",
          done: [],
          haveTo: ["똥싸기", "밥묵기", "잠자기", "그외 전부 리액트"]
        },
        {
          title: "너무 늦었다고 생각할 때가 진짜 늦었다",
          done: [],
          haveTo: ["인생은 한 방"]
        }
      ],
      currentList: {
        // title: "죽음과 결혼은 미룰수록 좋다",
        // done: [],
        // haveTo: ['똥싸기', '밥묵기', '잠자기', '그외 전부 리액트']
      }
    };
    this.selectTodoList = this.selectTodoList.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.addTodoList = this.addTodoList.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  selectTodoList(list) {
    this.setState({
      currentList: list
    });
  }

  addTodoList(list) {
    this.setState({
      allTodoList: this.state.allTodoList.concat({
        title: list,
        done: [],
        haveTo: []
      }),
      currentList: {
        title: list,
        done: [],
        haveTo: []
      }
    });
  }

  addTodo(title, todo) {
    console.log(title, todo)
    this.setState({
      allTodoList: this.state.allTodoList.map(list => {
        if (list.title === title) {
          list.haveTo.push(todo);
        }
        return list;
      })
    })
  }

  handleDelete(title, list) {
    console.log(title, list)
    this.setState({
      allTodoList: this.state.allTodoList.map(todo => {
        if (todo.title === title) {
          todo.done = todo.done.concat(list);
          todo.haveTo = todo.haveTo.filter(memo => memo !== list)
        }
        return todo;
      })
    });
  }

  render() {
    return (
      <div className="app">
        <div className="left">
          <Nav
            selectTodoList={this.selectTodoList}
            allTodoList={this.state.allTodoList}
            addTodoList={this.addTodoList}
          />
        </div>
        <div className="right">
          <View
            currentList={this.state.currentList}
            defaultList={this.state.allTodoList[0]}
            handleDelete={this.handleDelete}
            addTodo={this.addTodo}
          />
        </div>
      </div>
    );
  }
}

export default App;
