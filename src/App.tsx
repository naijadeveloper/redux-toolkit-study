import ShowRandom from "./components/ShowRandom";
import ListPrevRandoms from "./components/ListPrevRandoms";

function App() {
  return (
    <div className="App flex h-screen w-screen items-center justify-center bg-gray-800 text-white">
      <ShowRandom />
      <ListPrevRandoms />
    </div>
  );
}

export default App;
