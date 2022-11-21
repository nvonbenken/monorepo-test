import * as React from "react";

export default ({ piral }) => {
  const data = piral.getData("foo");
  console.log(data);
  return (
    <>
      <p>Global State Data</p>
      <p>{data}</p>
    </>
  );
};
