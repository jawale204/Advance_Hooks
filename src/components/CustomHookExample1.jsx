import React, { useEffect } from "react";
import useFetch from "../Hooks/useFetch";

function CustomHookExample1() {
  //notes : useFetch is called which returns null data and isloadind true then useEffect is called inside useFetch which
  //sets the data and isloading to false hence state changes and it returns data,isloading to customhook
  // hence we get 2 responses from useFetch 1st at normal return and then useEffect is called which sets data and then return
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
          <div key={item.id}>{item.title}</div>
        ))}
      </div>
    );
  }
}

export default CustomHookExample1;
