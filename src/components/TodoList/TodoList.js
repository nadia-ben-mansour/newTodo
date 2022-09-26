import React, { useEffect } from "react";
import GlobalContext from "../../contexts/GlobalContext";
import { Col, Row, Container, Button } from "reactstrap";
import classes from "./TodoList.module.css";
import axios from "axios";

const TodoList = () => {
  const { list, setList } = React.useContext(GlobalContext);
  const dragItem = React.useRef(null);
  const dragOverItem = React.useRef(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/v1/backlogs`).then((res) => {
      setList(res.data);
    });
  }, []);

  const handleSort = () => {
    let storyList = [...list];
    const draggedItemContent = storyList.splice(dragItem.current, 1)[0];
    storyList.splice(dragOverItem.current, 0, draggedItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setList(storyList);
    console.log(list);
  };

  return (
    <div>
      {list.map((item, index) => {
        return (
          <Row>
            <Col
              onDragStart={(e) => {
                dragItem.current = index;
              }}
              onDragEnter={(e) => {
                dragOverItem.current = index;
              }}
              onDragEnd={handleSort}
              onDragOver={(e) => e.preventDefault()}
              draggable
              key={index}
              className={classes.col}
              xs="12"
              lg="12"
            >
              <h4 className={classes.title}>{item.title}</h4>
              <Button className={classes.button}> Delete </Button>
            </Col>
          </Row>
        );
      })}
    </div>
  );
};

export default TodoList;
