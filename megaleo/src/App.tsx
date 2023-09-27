import Like from "./components/Like";

function App() {
  return (
    <div>
      <Like onClicked={() => console.log("clicked")} />
    </div>
  );
}

export default App;
