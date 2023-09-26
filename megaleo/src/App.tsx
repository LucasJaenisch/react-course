import React from "react";
import ListGroup from "./components/ListGroup";

const App = () => {
  return (
    <div>
      <ListGroup
        items={["xaxim", "chapeco", "ita"]}
        heading="cidades"
        onSelectItem={(item) => console.log(item)}
      />
    </div>
  );
};

export default App;
