import { useState } from "react";

function FileSystemComponent({ data }) {
  const [expand, setExpand] = useState(false);
  if (data.isFolder) {
    return (
      <div style={{ marginLeft: "30px" }}>
        <span onClick={() => setExpand(!expand)}>{data.name}</span>
        {expand &&
          data.items.map((item) => (
            <FileSystemComponent key={item.name + item.isFolder} data={item} />
          ))}
      </div>
    );
  }
  return <div style={{ marginLeft: "30px" }}>{data.name}</div>;
}

export default FileSystemComponent;
