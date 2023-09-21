import React from "react";
import Alert from "./components/Alert";
import DangerButton from "./components/DangerButton";

const App = () => {
  return (
    <div>
      <DangerButton color="danger" onClick={() => console.log("Clicked")}>
        Danger
      </DangerButton>
    </div>
  );
};

export default App;
