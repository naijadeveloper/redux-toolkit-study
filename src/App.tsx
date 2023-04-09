import ShowRandom from "./components/ShowRandom";
import ListPrevRandoms from "./components/ListPrevRandoms";

function App() {
  return (
    <div
      style={{
        backgroundColor: "#333",
        color: "#ccc",
        width: "100vw",
        height: "100vh",
        padding: "20px",
      }}
      className="App"
    >
      <ShowRandom />
      <ListPrevRandoms />
    </div>
  );
}

export default App;
