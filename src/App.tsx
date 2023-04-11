import ShowRandom from "./components/ShowRandom";
import ListPrevRandoms from "./components/ListPrevRandoms";
import { useState } from "react";

function App() {
  const [list, setList] = useState(false);
  return (
    <div className="App flex h-screen w-screen flex-col items-center justify-center bg-gray-800 text-white">
      <button
        onClick={() => setList(!list)}
        className="relative top-3 rounded-md border border-green-400 bg-gray-700 p-[10px] transition-all duration-150 hover:border-transparent"
      >
        {list ? "Motivate moi" : "Saved motivations"}
      </button>
      {list ? <ListPrevRandoms /> : <ShowRandom />}
    </div>
  );
}

export default App;
