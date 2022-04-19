import React, { useState } from "react";
import useLocalStorage from "../Hooks/useLocalStorage";

function CustomHookExample2() {
  const [text, setText] = useLocalStorage("key", "");
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  return (
    <div>
      <form action="form-control">
        <label htmlFor="tex" className="my-2 ">
          Name :
        </label>
        <br />
        <input
          type="text"
          id="tex"
          className="input"
          value={text}
          onChange={(e) => {
            console.log(e.target.value);
            setText(e.target.value);
            setTasks([...tasks, e.target.value]);
          }}
        />
      </form>
      <h4>{text}</h4>
    </div>
  );
}

export default CustomHookExample2;
