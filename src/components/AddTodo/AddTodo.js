import React, { useState } from "react";
import { Input, Label, Button, Container, Col, Row } from "reactstrap";
import classes from "./AddTodo.module.css";
import GlobalContext from "../../contexts/GlobalContext";
import axios from "axios";

const AddTodo = () => {
  const { list, setList } = React.useContext(GlobalContext);
  const [task, setTask] = useState("");

  const handleChange = (e) => {
    setTask(e.target.value);
    console.log(task);
  };

  const handleClick = () => {
    axios
      .post("http://localhost:5000/api/v1/backlogs/", { title: task })
      .then(setList([...list, task]));
  };
  return (
    <Container className={classes.Container}>
      <Row>
        <Col xs="4">
          {" "}
          <Input
            placeHolder="Add To Do"
            onChange={handleChange}
            name="todo"
            id="todo"
            className={classes.inpuTodo}
          ></Input>{" "}
        </Col>
        <Col xs="4">
          {" "}
          <Button className={classes.buttonAdd} onClick={handleClick}>
            Add
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default AddTodo;
