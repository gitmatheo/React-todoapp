import React, { Component } from "react";
import HeroImage from "./HeroImage.js";
import styled from "styled-components";
import List from "./List.js";
import Header from "./Header.js";
import Date from "./Date.js";
import Form from "./Form.js";
import Buttons from "./Buttons.js";
import "./App.css";
import "../assets/images/avatar.png";

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(255, 255, 255, 0.9);
  border-radius: 5px;
  box-shadow: 0 10px 20px -8px rgba(0, 0, 0, 0.8),
    10px 0px 20px -8px rgba(0, 0, 0, 0.5);
  width: 60vw;
`;

const InsideContainer = styled.div`
  width: 95%;
  min-height: 30vh;
  box-shadow: 10px 0px 20px -12px rgba(0, 0, 0, 0.5);
  div.number-of-tasks {
    text-align: center;
    padding: 10px;
  }
`;

class App extends Component {
  state = {
    tasks: [
      {
        id: 1,
        todo: "Do workout",
        complete: false
      },
      {
        id: 2,
        todo: "Check emails",
        complete: false
      },
      {
        id: 3,
        todo: "Visit Grandma",
        complete: false
      },
      {
        id: 4,
        todo: "Go to the doctor",
        complete: false
      }
    ],
    tasksToShow: "all",
    toggleAllComplete: true
  };

  addTask = task => {
    this.setState({
      tasks: [task, ...this.state.tasks]
    });
  };

  toggleComplete = id => {
    this.setState({
      tasks: this.state.tasks.map(task => {
        if (task.id === id) {
          return {
            id: task.id,
            todo: task.todo,
            complete: !task.complete
          };
        } else {
          return task;
        }
      })
    });
  };

  updateTasksToShow = s => {
    this.setState({
      tasksToShow: s
    });
  };

  handleDeleteTask = id => {
    console.log(id);
    console.log(this.state.tasks.filter(task => task.id !== id));
    this.setState({
      tasks: this.state.tasks.filter(task => task.id !== id)
    });
  };

  deleteCompleteTasks = () => {
    this.setState({
      tasks: this.state.tasks.filter(task => !task.complete)
    });
  };

  toggleAll = () => {
    this.setState(prevState => ({
      tasks: prevState.tasks.map(task => ({
        ...task,
        complete: prevState.toggleAllComplete
      })),
      toggleAllComplete: !prevState.toggleAllComplete
    }));
  };

  //local storage

  componentDidMount = () => {
    if (!localStorage.getItem("todo")) {
      localStorage.setItem("todo", JSON.stringify(this.state.tasks));
    } else {
      this.setState({
        tasks: JSON.parse(localStorage.getItem("todo"))
      });
    }
  };

  componentDidUpdate = () => {
    localStorage.setItem("todo", JSON.stringify(this.state.tasks));
  };

  render() {
    let tasks = [];
    if (this.state.tasksToShow === "all") {
      tasks = this.state.tasks;
    } else if (this.state.tasksToShow === "active") {
      tasks = this.state.tasks.filter(task => !task.complete);
    } else if (this.state.tasksToShow === "complete") {
      tasks = this.state.tasks.filter(task => task.complete);
    }
    return (
      <div className="App">
        <HeroImage />
        <Container>
          <InsideContainer>
            <Header />
            <Form onSubmit={this.addTask} />
            <div className="number-of-tasks">
              Number of tasks todo:
              <strong>
                {this.state.tasks.filter(task => !task.complete).length}
              </strong>
            </div>

            <Buttons
              all={() => this.updateTasksToShow("all")}
              active={() => this.updateTasksToShow("active")}
              complete={() => this.updateTasksToShow("complete")}
              toggleAll={() => this.toggleAll()}
              tasks={this.state.tasks}
              deleteCompleteTasks={this.deleteCompleteTasks}
            />

            <ul>
              {tasks.map(task => (
                <List
                  key={task.id}
                  toggleComplete={() => this.toggleComplete(task.id)}
                  onDelete={() => this.handleDeleteTask(task.id)}
                  task={task.todo}
                  time={task.time}
                  complete={task.complete}
                />
              ))}
            </ul>
          </InsideContainer>

          <Date />
        </Container>
      </div>
    );
  }
}

export default App;
