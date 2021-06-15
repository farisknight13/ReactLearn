import React, { useState } from "react";

export default ()=> {

  let [count , setCount] = useState(0);

  return (
    <div>
      <h1>Farisknight</h1>
      <h2>Count : {count}</h2>
      <button
      onClick = { () => {
        setCount(count+1);
      }}>add</button>
    </div>
  );
};