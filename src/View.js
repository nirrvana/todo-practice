import React from "react";

class View extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      isClicked: true
    })
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
            ? ""
            : "완료됨" + this.props.currentList.done.length}
        </div>
        <div>
          {Object.keys(this.props.currentList).length === 0
            ? ""
            : this.props.currentList.haveTo.map((list, index) => (
                <ul>
                  <li
                    className={`${index}`}
                    onClick={() => this.props.handleDelete(this.props.currentList.title, list)}
                  >
                    {list}
                  </li>
                </ul>
              ))}
        </div>
        <input className={"addTodo " + (this.state.isClicked ? 'show': '')}></input>
      </div>
    );
  }
}

export default View;
