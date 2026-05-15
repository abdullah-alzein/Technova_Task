import React from "react";

function GrandChild({ count, Add, Sub, reset }) {
  return (
    <>
      <hr/>
      <h3>GrandChild</h3>
      <h1>{count}</h1>

      <button onClick={Add}>Add</button> <br />
      <button onClick={Sub}>Sub</button> <br />
      <button onClick={reset}>Reset</button>
    </>
  );
}

export default GrandChild;