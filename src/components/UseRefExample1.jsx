import React, { useRef } from "react";

function UseRefExample1() {
  const inputRef = useRef();
  const para = null;
  const paraRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();

    //get value of the ref elemet
    console.log(inputRef.current.value);

    //setting para to input value
    paraRef.current.innerText = inputRef.current.value;

    //set value of ref element
    inputRef.current.value = "king is sing";

    //changing style of element using ref
    inputRef.current.style.backgroundColor = "red";
  };

  const focusInput = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      {console.log("rendering")}
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          ref={inputRef}
          className="form-control mb-2"
        />
        <button type="submit" className="btn btn-primary">
          submit
        </button>
      </form>

      <p onClick={focusInput} ref={paraRef}>
        {para}{" "}
      </p>
    </div>
  );
}

export default UseRefExample1;
