import { AiOutlineArrowUp } from "react-icons/ai";
import { AiOutlineArrowDown } from "react-icons/ai";

import { useSelector } from "react-redux";
import type { rootState } from "../store";
import { useEffect, useState } from "react";

const ListPrevRandoms: React.FC = () => {
  const { quotes } = useSelector((state: rootState) => state.quote);
  const [index, setIndex] = useState<number>(() => {
    let quoteIndex = localStorage.getItem("quoteIndex");
    if (!quoteIndex) return 0;
    return JSON.parse(quoteIndex);
  });

  useEffect(() => {
    localStorage.setItem("quoteIndex", JSON.stringify(index));
  }, [index]);

  function handleDownBtn() {
    setIndex((index) => (index == 4 ? 0 : index + 1));
  }

  function handleUpBtn() {
    setIndex((index) => (index == 0 ? 4 : index - 1));
  }

  return (
    <div className="flex w-[90%] flex-col items-center justify-center rounded-md bg-gray-900 p-[20px] drop-shadow-[0px_0px_50px_seagreen] md:w-[70%] lg:w-[50%]">
      <section>
        {/* section for new quotes */}
        <q className="border border-gray-600 text-[18px]">
          {`${quotes[index].content}`}
        </q>
        <p className="text-right text-lg text-gray-300">
          - {`${quotes[index].author}`}
        </p>
      </section>
      <div className="mt-[5px] flex w-full items-center justify-center space-x-2">
        <button onClick={handleDownBtn} className="relative">
          <span
            className={`absolute left-[-6px] top-[30px] flex ${
              quotes.length - 1 - index == 0 && "hidden"
            } h-[20px] w-[20px] items-center justify-center rounded-full bg-blue-800`}
          >
            {quotes.length - 1 - index}
          </span>
          <AiOutlineArrowDown className="cursor-pointer rounded-full border-2 border-green-500 p-2 text-[50px] transition-all duration-150 hover:bg-gray-800" />
        </button>

        <button onClick={handleUpBtn} className="relative">
          <AiOutlineArrowUp className="cursor-pointer rounded-full border-2 border-green-500 p-2 text-[50px] transition-all duration-150 hover:bg-gray-800" />
          <span
            className={`absolute right-[-6px] top-[30px] ${
              index == 0 && "hidden"
            } h-[20px] w-[20px] items-center justify-center rounded-full bg-blue-800`}
          >
            {index}
          </span>
        </button>
      </div>
    </div>
  );
};

export default ListPrevRandoms;
