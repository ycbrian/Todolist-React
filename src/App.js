import React, { Component } from "react";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { isParenthesizedExpression } from "@babel/types";

class App extends Component {
  state = {
    items: [
      { id: 1, title: "wake up" },
      { id: 1, title: "make breakfast" }
    ],
    id: uuid(),
    item: "",
    editItem: false
  };

  handleChange = e => {};

  handleSubmit = e => {};

  clearList = () => {};

  handleDelete = id => {};

  handleEdit = id => {};

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-5"></div>
            <h3 className="text-capitalize text-center">todo input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
