import React, { useState } from "react";
import MyStatefulEditor from "./rte_test";

export default function RTEBOX() {
  const [val, setVal] = useState("");
  const onChange = (value: React.SetStateAction<string>) => {
    console.log(value);
    setVal(value);
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>by -Swapnadeep</h2>
      {/* <RichTextEditor />. */}
      <MyStatefulEditor markup="" onChange={onChange} />
      <button
        onClick={() => {
          console.log(val);
          alert(val);
        }}
      >
        Submit
      </button>
      <p dangerouslySetInnerHTML={{ __html: val }}></p>
      <hr />
      <p>{val}</p>
    </div>
  );
}
