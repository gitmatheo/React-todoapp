import React, { Component } from "react";
import styled from "styled-components";

const MainForm = styled.form`
  display: flex;
  justify-content: center;
  input {
    padding: 10px;
    border: none;
    border-bottom: 2px solid rgba(0, 0, 0, 0.8);
    background: transparent;
    text-align: center;
    outline: none;
    width: 50%;
    transition: 0.3s;
    &:hover {
      box-shadow: 0px 15px 15px -12px rgba(0, 0, 0, 0.5);
    }
  }
  button {
    padding: 10px 5%;
    margin: 0 5%;
    background: transparent;
    border: 2px solid #800080;
    border-radius: 4px;
    cursor: pointer;
    outline: none;
    transition: 0.3s;
    &:hover {
      background: #800080;
      color: white;
    }
  }
`;

class Form extends Component {
  state = {};

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({
      id: Date.now(),
      time: "00.00",
      todo: this.state.text,
      complete: false,
      appear: true
    });

    this.setState({
      text: ""
    });
  };
  render() {
    return (
      <MainForm onSubmit={this.handleSubmit}>
        <input
          value={this.state.text}
          onChange={this.handleChange}
          name="text"
          placeholder="Add task"
        />
        <button onClick={this.handleSubmit}>ADD</button>
      </MainForm>
    );
  }
}

export default Form;
