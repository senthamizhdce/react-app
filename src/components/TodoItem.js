import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "5px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "Line-through" : "none"
    };
  };
  // markComplete(e) {
  //     console.log(this.props);
  // }
  // markComplete = (e) => {
  //     console.log(this.props);
  // }

  render() {
    const { id, title, completed } = this.props.todo;
    return (
      // <div style={{ backgroundColor: '#f4f4f4' }}>
      /* <div style={itemStyle}> */
      <div style={this.getStyle()}>
        <p>
          {/* <input type="checkbox" onChange={this.markComplete.bind(this)} /> */}
          {/* <input type="checkbox" onChange={this.markComplete} /> */}
          <input
            id={"todo_" + id}
            type="checkbox"
            checked={completed}
            onChange={this.props.markComplete.bind(this, id)}
            style={{ marginRight: "5px" }}
          />
          <label htmlFor={"todo_" + id}>{title}</label>
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>
            X
          </button>
        </p>
      </div>
    );
  }
}

//PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
};

const btnStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 8px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right"
};
// const itemStyle = {
//     backgroundColor: '#f4f4f4'
// }

export default TodoItem;
