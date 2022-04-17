import React, { useEffect, useState, useMemo, useRef } from "react";

function UseMemoExample() {
  const render = useRef(1);
  const [sqrRoot, setSqroot] = useState(0);
  const [number, setNumber] = useState(1);

  var num = useMemo(() => findSqrRoot(number), [number]);
  useEffect(() => {
    render.current = render.current + 1;
  });

  function findSqrRoot(num) {
    var j = 0;
    for (let i = 0; i < 3000; i++) {
      console.log(i);
    }
    return Math.sqrt(num);
  }
  return (
    <div>
      {console.log("rendered")}
      <input
        className="my-3 "
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      ></input>
      <div className="text-2xl">sqrt : {num}</div>
      <button
        className="btn btn-primary"
        onClick={() => {
          setSqroot((prev) => {
            return prev + 1;
          });
        }}
      >
        rerender
      </button>
      <div className="text-2xl">render {render.current}</div>
    </div>
  );
}

export default UseMemoExample;
