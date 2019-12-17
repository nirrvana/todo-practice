import React from "react";

class View extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
      currentList: this.props.currentList
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyup = this.handleKeyup.bind(this);
  }

  handleClick() {
    this.setState({
      isClicked: true
    });
  }

  handleKeyup(e) {
    if (e.key === "Enter") {
      console.log('a',this.props.currentList);
      if (Object.keys(this.props.currentList).length === 0) {
        this.props.addTodo(this.props.defaultList.title, e.target.value);
        this.props.selectTodoList(this.props.defaultList);
        
      } else {
        this.props.addTodo(this.props.currentList.title, e.target.value);
        this.props.selectTodoList(this.props.currentList);
      }
      this.setState({
        isClicked: false
      });
      e.target.value = "";
    }
  }

  render() {
    console.log('ccc', this.props.currentList)
    return (
      <div>
        <button className="addTodoBtn" onClick={this.handleClick}>
          +
        </button>
        <div className="title">
          {Object.keys(this.props.currentList).length === 0
            ? this.props.defaultList.title
            : this.props.currentList.title}
        </div>
        <div className="done">
          {Object.keys(this.props.currentList).length === 0
            ? "완료됨" + this.props.defaultList.done.length
            : "완료됨" + this.props.currentList.done.length}
        </div>
        <div>
          {Object.keys(this.props.currentList).length === 0
            ? this.props.defaultList.haveTo.map((list, index) => (
                <ul>
                  <li
                    className={`${index}`}
                    onClick={() =>
                      this.props.handleDelete(
                        this.props.defaultList.title,
                        list
                      )
                    }
                  >
                    {list}
                  </li>
                </ul>
              ))
            : this.props.currentList.haveTo.map((list, index) => (
                <ul>
                  <li
                    className={`${index}`}
                    onClick={() =>
                      this.props.handleDelete(
                        this.props.currentList.title,
                        list
                      )
                    }
                  >
                    {list}
                  </li>
                </ul>
              ))}
        </div>
        <input
          className={"addTodo " + (this.state.isClicked ? "show" : "")}
          onKeyUp={this.handleKeyup}
        ></input>
      </div>
    );
  }
}

export default View;
