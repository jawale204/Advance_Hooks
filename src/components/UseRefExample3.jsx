import React, { useState } from "react";
import ToggleText from "./ToggleText";

function UseRefExample3() {
  const [toggleText, setToggleText] = useState(true);
  return (
    <div>
      <button
        className="btn btn-primary my-3"
        onClick={() => setToggleText(!toggleText)}
      >
        Toggle
      </button>

      {toggleText && <ToggleText />}
    </div>
  );
}

export default UseRefExample3;
