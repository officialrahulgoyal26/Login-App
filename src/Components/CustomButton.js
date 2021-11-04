import React from "react";

const CustomButton = (props) => {
  return (
    <button
      onClick={() => {
        props.action();
      }}
    >
      {props.title}
    </button>
  );
};

export default CustomButton;
