import React, { useEffect, useState } from "react";

function useFetch(url, optios) {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      //setIsLoading(true);
      console.log("called");
      const response = await fetch(url, optios);
      const data = await response.json();
      setData(data);
      setIsLoading(false);
    };

    fetchData();

    //return console.log("unmounted");
  }, []);

  console.log("rendered", isLoading);

  return { data, isLoading };
}

export default useFetch;
