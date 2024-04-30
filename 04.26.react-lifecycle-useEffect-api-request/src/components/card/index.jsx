import React, { useEffect, useState } from "react";

const Card = () => {
  //lifecycle methods
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  //   useEffect(() => {
  //     console.log("mounting");

  //     return () => {
  //       console.log("unmounting");
  //     };
  //   }, []);

  useEffect(() => {
    console.log("updating");
  }, [count, inputValue]);
  return (
    <div>
      <h1>card</h1>
      {/* <button onClick={() => setCount(count + 1)}>Increment</button> */}
      <button onClick={() => setCount((prevState) => prevState + 1)}>
        Increment{" "}
      </button>

      <h1>Count {count}</h1>

      <hr />
      <input
        type="text"
        name=""
        id=""
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <br />
      <span>INPUT VALUE IS: {inputValue}</span>
    </div>
  );
};

export default Card;
