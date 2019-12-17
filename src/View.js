import React from "react";

class View extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false
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
      this.props.addTodo(this.props.currentList.title, e.target.value);
      this.setState({
        isClicked: false
      });
      e.target.value = '';
    }
  }

  render() {
    return (
      <div>
        <button className="addTodoBtn" onClick={this.handleClick}>
          +
        </button>
        <div>
          {Object.keys(this.props.currentList).length === 0
            ? this.props.defaultList.title
            : this.props.currentList.done.length === 0
            ? this.props.currentList.title
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
