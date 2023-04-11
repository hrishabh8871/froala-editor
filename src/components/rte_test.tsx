import React, { useState } from "react";
import RichTextEditor from "react-rte";

export default function MyStatefulEditor({onChangeData}: any) {
  const [value, setValue] = useState<any>()

  const onChange = (value: { toString: (arg0: string) => any; }) => {
    setValue({ value });
    if (onChangeData) {
      // Send the changes up to the parent component as an HTML string.
      // is here to demonstrate using `.toString()` but in a real app it
      // would be better to avoid generating a string on each change.
      onChangeData(value.toString("html"));
    }
  };

  
    return <RichTextEditor value={value} onChange={onChange} />;
}
