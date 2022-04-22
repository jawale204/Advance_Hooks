import React from "react";
import useFetch from "../Hooks/useFetch";

const obj = {};
function CustomHookExample1() {
  console.log("calling");
  const { data, isLoading } = useFetch(
    "https://jsonplaceholder.typicode.com/todos/",
    obj
  );

  console.log(data, isLoading);
  if (isLoading) {
    return <div>loadin</div>;
  } else {
    return (
      <div>
        {data.map((item) => (
          <div key={item.id}>{item.title}</div>
        ))}
      </div>
    );
  }
}

export default CustomHookExample1;
