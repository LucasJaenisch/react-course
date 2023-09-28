import ExpandableText from "./components/ExpandableText";

function App() {
  return (
    <div>
      <ExpandableText onClicked={() => console.log("pressed")}>
        Hello World
      </ExpandableText>
    </div>
  );
}

export default App;
