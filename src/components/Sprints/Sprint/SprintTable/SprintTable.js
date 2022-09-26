import React from "react";
import { Row, Table, Col, Container } from "reactstrap";
import Backlog from "./Backlog/Backlog";
import classes from "./SprintTable.module.css";

const SprintTable = () => {
  return (
    <Container style={{ margin: "3rem" }}>
      <Row style={{ display: "flex", flexDirection: "row" }}>
        <Col xs="12" lg="2">
          {" "}
          <div className={classes.backlog}>Backlog Sprint</div>
          <Backlog />
        </Col>
        <Col xs="12" lg="2">
          {" "}
          <div className={classes.todo}>To Do</div>
        </Col>
        <Col xs="12" lg="2">
          <div className={classes.progress}>In Progress</div>
        </Col>
        <Col xs="12" lg="2">
          {" "}
          <div className={classes.test}>To Test</div>
        </Col>
        <Col xs="12" lg="2">
          {" "}
          <div className={classes.done}>Done</div>
        </Col>
      </Row>
    </Container>
  );
};

export default SprintTable;
