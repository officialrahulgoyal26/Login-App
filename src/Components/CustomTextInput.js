import React from "react";

const CustomTextInput = (props) => {
  return (
    <input
      onChangeCapture={(text) => {
        props.action(text);
      }}
      value={props.value}
      {...props}
      placeholder={props.label}
    />
  );
};

export default CustomTextInput;
