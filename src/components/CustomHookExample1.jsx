import React, { useEffect } from "react";
import useFetch from "../Hooks/useFetch";

function CustomHookExample1() {
  const { data, isLoading } = useFetch(
    "https://jsonplaceholder.typicode.com/todos/",
    {}
  );

  console.log(data, isLoading);
  if (isLoading) {
    return <div>loadin</div>;
  } else {
    return (
      <div>
        {data.map((item) => (
          <div>{item.title}</div>
        ))}
      </div>
    );
  }
}

export default CustomHookExample1;
