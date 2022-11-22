import * as React from "react";

export default ({ piral }) => {
  const account = piral.getData("account");
  console.log(account);
  return (
    <>
      <p>Global State Data</p>
      <p>{JSON.stringify(account)}</p>
    </>
  );
};
