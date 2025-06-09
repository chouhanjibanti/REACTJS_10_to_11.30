import React, { useState } from "react";

function UseInput(initialValue = "") {
  const [value, setValue] = useState(initialValue);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const reset = () => {
    setValue("");
  };

  return { value, onChange, reset };
}

export default UseInput;
