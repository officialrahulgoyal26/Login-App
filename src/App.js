import { useState } from "react";
import "./App.css";

import CustomTextInput from "./Components/CustomTextInput";
import constants from "./constants";
import CustomButton from "./Components/CustomButton";

const App = () => {
  const [data, setData] = useState("rahul");
  const [name, setName] = useState("Shivam");

  return (
    <div style={{ flexDirection: "column" }} className="App">
      <h1 style={{ color: constants.primaryColor }}>{data}</h1>
      <h1 style={{ color: constants.primaryColor }}>{name}</h1>
      <CustomTextInput
        label="Enter your name"
        value="Shivam"
        action={(text) => {
          console.log(text)
        
        }}
      />
      <CustomTextInput
        action={(text) => {
          alert(text);
        }}
        value=""
        label="Enter your pasword"
      />

      <CustomButton
        action={() => {
          setData("Button Third");
        }}
        title="submit"
      />
    </div>
  );
};

export default App;
