import React, { useEffect, useState } from "react";

function useFetch(url, optios) {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  console.log("rendered1", isLoading);

  useEffect(() => {
    console.log("sahil", url);
    const fetchData = async () => {
      //setIsLoading(true);
      console.log("called");
      const response = await fetch(url, optios);
      const data = await response.json();
      console.log("data fetched");
      setData(data);
      console.log(data);
      setIsLoading(false);
      console.log("data set");
    };

    fetchData();
    console.log("sahil2");
  }, [url, optios]);

  console.log("rendered", isLoading);

  return { data, isLoading };
}

export default useFetch;
