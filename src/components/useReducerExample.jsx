import React, { useContext } from "react";
import ExampleContext from "../Context/exampleContext";

function UseReducerExample() {
  const { dispatch, count } = useContext(ExampleContext);
  return (
    <div>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>INCREMENT</button>
      <h1>{count}</h1>
    </div>
  );
}

export default UseReducerExample;
