import React, { Component } from "react";
import HeroImage from "./HeroImage.js";
import List from "./List.js";
import Header from "./Header.js";
import Date from "./Date.js";
import Form from "./Form.js";
import Buttons from "./Buttons.js";
import Footer from "./Footer.js";
import Congratulations from "./Congratulations.js";
import styled from "styled-components";
import "./App.css";
import "../assets/images/avatar.png";

const Ul = styled.ul`
  margin: 20px;
`;

const Container = styled.div`
  position: relative;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 5px;
  box-shadow: 0px 10px 30px -8px rgba(0, 0, 0, 0.3),
    10px 0px 30px -8px rgba(0, 0, 0, 0.3),
    -10px 0px 30px -8px rgba(0, 0, 0, 0.3),
    0px -10px 30px -8px rgba(0, 0, 0, 0.3);
  width: 60vw;
  margin: 10% auto;

  @media (max-width: 768px) {
    width: 75vw;
  }

  @media (max-width: 480px) {
    width: 90vw;
    margin: 10% auto;
  }
`;

const InsideContainer = styled.div`
  width: 95%;
  min-height: 30vh;
  box-shadow: 10px 0px 20px -12px rgba(0, 0, 0, 0.5);
  z-index: 10000;
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
        complete: false,
        appear: true
      },
      {
        id: 2,
        todo: "Check emails",
        complete: false,
        appear: true
      },
      {
        id: 3,
        todo: "Visit Grandma",
        complete: false,
        appear: true
      },
      {
        id: 4,
        todo: "Go to the doctor",
        complete: false,
        appear: true
      }
    ],
    tasksToShow: "all",
    toggleAllComplete: true
  };

  onSubmit = task => {
    if (task.todo !== "") {
      this.setState({
        tasks: [task, ...this.state.tasks]
      });
    }
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

  handleDeleteTask = (id, appear) => {
    this.setState({
      appear: !this.state.tasks.appear,
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
            <Form onSubmit={this.onSubmit} />
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
              tasksToShow={this.state.tasksToShow}
            />
            <Congratulations tasks={this.state.tasks} />
            <Ul>
              {tasks.map(task => (
                <List
                  key={task.id}
                  toggleComplete={() => this.toggleComplete(task.id)}
                  onDelete={() => this.handleDeleteTask(task.id, task.appear)}
                  task={task.todo}
                  time={task.time}
                  complete={task.complete}
                  appear={task.appear}
                  id={task.id}
                />
              ))}
            </Ul>
          </InsideContainer>
          <Date />
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;
