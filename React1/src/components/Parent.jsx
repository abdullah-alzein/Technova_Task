import React, { useState } from "react";
import Child from "./Child";

function Parent() {
  const [count, setCount] = useState(0);

  const Add = () => setCount(count + 1);
  const Sub = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <>
    <h1>Parent</h1>
      <Child 
        count={count}
        Add={Add}
        Sub={Sub}
        reset={reset}
      />
    </>
  );
}

export default Parent;