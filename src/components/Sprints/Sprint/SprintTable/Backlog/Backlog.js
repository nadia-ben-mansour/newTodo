import React, { useState } from "react";
import ListTasksModal from "./ListTasksModal/ListTasksModal";
import { Button } from "reactstrap";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Backlog = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);
  };
  return (
    <div>
      <ListTasksModal toggle={toggle} modal={modal} setModal={setModal} />
      <Button
        style={{
          backgroundColor: "#87CEFA",
          color: "white",
          marginBlock: ".5rem",
          border: "none",
        }}
        onClick={toggle}
      >
        <FontAwesomeIcon icon={faPlus} /> Ajouter nouvelle Task
      </Button>
    </div>
  );
};

export default Backlog;
