import React from "react";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import GlobalContext from "../../contexts/GlobalContext";
import SprintTable from "./Sprint/SprintTable/SprintTable";
import classes from "./Sprints.module.css";

const Sprints = () => {
  const { sprint, setSprint } = React.useContext(GlobalContext);
  const handleClick = () => {
    const temp = [...sprint];
    temp.push(temp.length + 1);
    setSprint(temp);
    console.log(sprint);
  };
  return (
    <div>
      <Button
        style={{
          backgroundColor: "blue",
          color: "white",
          marginBottom: ".5rem",
          border: "none",
          margin: "3rem",
          height: "2.5rem",
          borderRadius: "0.7rem",
        }}
        onClick={handleClick}
      >
        <FontAwesomeIcon icon={faPlus} /> Add new sprint
      </Button>
      {sprint.map((item) => {
        return (
          <div>
            <h3 className={classes.sprintTitle}>sprint {item}</h3>

            <SprintTable />
          </div>
        );
      })}
    </div>
  );
};

export default Sprints;
