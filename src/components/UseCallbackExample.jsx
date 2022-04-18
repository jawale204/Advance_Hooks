import React, { useCallback, useState } from "react";

function UseCallbackExample() {
  const [clicks, setClicks] = useState(0);

  const handleClick = useCallback(() => {
    setClicks((prev) => prev + 1);
  }, [setClicks]);
  return (
    <div>
      <div>clicks: {clicks}</div>
      <Button handleClick={handleClick} />
    </div>
  );
}

const Button = React.memo(({ handleClick }) => {
  return (
    <button className=" btn btn-primary my-2" onClick={handleClick}>
      {console.log("rendered")}click
    </button>
  );
});

export default UseCallbackExample;
