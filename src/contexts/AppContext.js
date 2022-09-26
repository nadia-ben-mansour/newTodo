import React, { useState } from "react";
import GlobalContext from "./GlobalContext";
const AppContext = (props) => {
  const [list, setList] = useState([]);
  const [sprint, setSprint] = useState([]);
  const [task, setTask] = useState({});
  return (
    <GlobalContext.Provider
      value={{ list, setList, sprint, setSprint, task, setTask }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
