import { AiOutlineArrowUp } from "react-icons/ai";
import { AiOutlineArrowDown } from "react-icons/ai";

import { useSelector } from "react-redux";
import type { rootState } from "../store";
import { useState } from "react";

const ListPrevRandoms: React.FC = () => {
  const { quotes } = useSelector((state: rootState) => state.quote);
  const [index, setIndex] = useState<number>(1);
  return (
    <div className="flex w-[90%] flex-col items-center justify-center rounded-md bg-gray-900 p-[20px] drop-shadow-[0px_0px_50px_seagreen] md:w-[70%] lg:w-[50%]">
      <section>
        {/* section for new quotes */}
        <q className="border border-gray-600 text-[18px]">
          {`${quotes[index]}`}
        </q>
        <p className="text-right text-lg text-gray-300">- Dr seuss</p>
      </section>
      <div className="mt-[5px] flex w-full items-center justify-center space-x-2">
        <button className="relative">
          <span className="absolute left-[-6px] top-[30px] flex h-[20px] w-[20px] items-center justify-center rounded-full bg-blue-800">
            4
          </span>
          <AiOutlineArrowDown className="cursor-pointer rounded-full border-2 border-green-500 p-2 text-[50px] transition-all duration-150 hover:bg-gray-800" />
        </button>

        <button className="relative">
          <AiOutlineArrowUp className="cursor-pointer rounded-full border-2 border-green-500 p-2 text-[50px] transition-all duration-150 hover:bg-gray-800" />
          <span className="absolute right-[-6px] top-[30px] hidden h-[20px] w-[20px] items-center justify-center rounded-full bg-blue-800">
            1
          </span>
        </button>
      </div>
    </div>
  );
};

export default ListPrevRandoms;
