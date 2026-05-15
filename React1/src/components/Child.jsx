import React from "react";
import GrandChild from "./GrandChild";

function Child(props) {
  return (
    <>
    <h2>Child</h2>
      <GrandChild 
        count={props.count}
        Add={props.Add}
        Sub={props.decrement}
        reset={props.reset}
      />
    </>
  );
}

export default Child;