import React, { useEffect, useRef, useState } from "react";

function UseRefExample2() {
  const renders = useRef(0);
  const [name, setName] = useState("");
  const prevValue = useRef("");
  console.log("rendered");
  console.log("rendered1");
  useEffect(() => {
    //Hook useEffect is called after rendering the component and updating useRef value will not re-render the component,
    //keeping this in mind.
    //when we call setName we re-render the component with its value after that we set prevValue inside useEffect.
    //So now even though prevValue is set to new value it wont be visible on screen because useRef will not re-render the component.

    //summary //notes useEffect is called after render is complete so even if u set prevValue it wont be visible on ui until next render
    console.log("useEffect");
    prevValue.current = name;
    renders.current = renders.current + 1;
    setName("king");
  }, [name]);

  return (
    <div>
      {console.log("UI")}
      <h2>Renders : {renders.current}</h2>
      <h2>prevValue : {prevValue.current}</h2>
      <input
        className="form-control my-3"
        onChange={(e) => setName(e.target.value)}
      ></input>
    </div>
  );
}

export default UseRefExample2;
