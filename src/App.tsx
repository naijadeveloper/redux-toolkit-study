import ShowRandom from "./components/ShowRandom";
import ListPrevRandoms from "./components/ListPrevRandoms";
import { useState } from "react";
import { useSelector } from "react-redux";
import type { rootState } from "./store";

function App() {
  const quotes = useSelector((state: rootState) => state.quote.quotes);
  const [list, setList] = useState(false);

  return (
    <div className="App relative flex h-screen w-screen flex-col items-center justify-center bg-gray-800 text-white">
      <p className="absolute top-1 mt-2 w-full px-3 text-center text-xl md:text-3xl">
        While I practice my redux toolkit skills, You can read famous quotes
      </p>
      {quotes.length > 0 && (
        <button
          onClick={() => setList(!list)}
          className="relative top-3 rounded-md border border-green-400 bg-gray-700 p-[10px] transition-all duration-150 hover:border-transparent"
        >
          {list ? "Famous Quotes" : "Saved Quotes"}
        </button> 
      )}
      {list ? <ListPrevRandoms /> : <ShowRandom />}
    </div>
  );
}

export default App;
