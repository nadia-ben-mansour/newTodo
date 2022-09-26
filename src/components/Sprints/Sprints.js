import React from "react";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
const Sprints = () => {
  return (
    <div>
      <Button
        style={{
          backgroundColor: "#87CEFA",
          color: "white",
          marginBottom: ".5rem",
          border: "none",
        }}
 
      >
        <FontAwesomeIcon icon={faPlus} /> Ajouter nouvelle Task
      </Button>
    </div>
  );
};

export default Sprints;
