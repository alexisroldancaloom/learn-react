import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting } from "./Greeting";
import { Button } from "./Button";
import { TaskCard } from "./Task";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <TaskCard ready={false}/>
  </>
);
