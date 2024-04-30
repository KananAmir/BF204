import { useState } from "react";

const CardComp = ({ headingRef }) => {
  //   console.log(headingRef);

  const [textValue, setTextValue] = useState("result");
  return (
    <div>
      <button
        onClick={() => {
          //   console.log(headingRef);
          setTextValue(headingRef.current.textContent);
        }}
      >
        Click
      </button>
      <span className="result">{textValue}</span>
    </div>
  );
};

export default CardComp;
