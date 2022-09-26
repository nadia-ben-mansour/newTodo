import React from "react";
import { Button, Modal, ModalBody, ModalFooter, Input } from "reactstrap";
import GlobalContext from "../../../../../../contexts/GlobalContext";

const ListTasksModal = (props) => {
  const { modal, toggle } = props;
  const { list, task, setTask } = React.useContext(GlobalContext);
  return (
    <div>
      <Modal size="lg" isOpen={modal} toggle={toggle}>
        <ModalBody>
          <ul>
            {list.map((l, index) => {
              return (
                <li
                  onClick={() => {
                    setTask(l);
                  }}
                  key={index}
                  style={{
                    cursor: "pointer",
                    listStyle: "none",
                    border: "0.7px solid lightgray",
                    marginTop: "13px",
                    padding: "20px 20px ",
                    borderRadius: "13px",
                  }}
                >
                  {l.title}{" "}
                </li>
              );
            })}
          </ul>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ListTasksModal;
