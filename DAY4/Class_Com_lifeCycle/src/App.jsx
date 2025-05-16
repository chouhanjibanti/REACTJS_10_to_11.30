import React, { Component } from "react";
import Update from "./Update";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  handleIncrement() {
    this.setState({ count: this.state.count + 1 });
  }

  componentDidMount() {
    console.log("ComponentDiMount : when component render/load first time ");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount : component removed ");
  }

  render() {
    return (
      <div>
        <h1>Hy debugshala</h1>
        <Update number={this.state.count} />

        <button
          onClick={() => {
            this.handleIncrement();
          }}
        >
          click on me
        </button>
      </div>
    );
  }
}

// constructor :-0 initialize the value
// this :- point to the current object.
// super()   this() and super() :- access the parent class constructor
// inheritance :-

// const[count, setCount]  =useState(0);

// methods
// componentDidMount()
// compoentDidUpdate()  state =0 1,2,3,4
// componentwillUnmount()

// final
// finally : connection logic
