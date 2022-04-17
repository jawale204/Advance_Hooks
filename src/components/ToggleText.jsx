import React, { useEffect, useState } from "react";

function ToggleText() {
  const [title, setTitle] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setTitle(data);
          console.log("fetched");
          setIsLoading(false);
        }, 3000);
      });

    return () => {
      console.log("unmounted");
    };
  }, []);

  return isLoading ? (
    <div>{console.log("ren")}Loading</div>
  ) : (
    <div>
      {console.log("ren1")}title = {title.title}
    </div>
  );
}

export default ToggleText;
