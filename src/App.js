import React from 'react';
import Nav from './Nav';
import View from './View';

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
          haveTo: ['똥싸기', '밥묵기', '잠자기', '그외 전부 리액트']
        }
      ],
      currentList: {
        title: "죽음과 결혼은 미룰수록 좋다",
        done: [],
        haveTo: ['똥싸기', '밥묵기', '잠자기', '그외 전부 리액트']
      }
    };
    this.selectTodoList = this.selectTodoList.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  selectTodoList(list) {
    this.setState({
      currentList: list
    });
  }

  handleDelete() {

  }

  render() {
    return (
      <div className="app">
        <div className="left">
          <Nav
            selectTodoList={this.selectTodoList}
            allTodoList={this.state.allTodoList}
          />
        </div>
        <div className="right">
          <View
            currentList={this.state.currentList}
            defaultList={this.state.allTodoList[0]}
          />
        </div>
      </div>
    );
  }
}

export default App;
