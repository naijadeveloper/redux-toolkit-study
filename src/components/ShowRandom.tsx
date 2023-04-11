import { useSelector } from "react-redux";
import type { rootState } from "../store";

const ShowRandom = () => {
  const quotes = useSelector((state: rootState) => state.quote.quotes);
  return (
    <div className="flex w-[90%] flex-col items-center justify-center rounded-md bg-gray-900 p-[20px] drop-shadow-[0px_0px_50px_seagreen] md:w-[70%] lg:w-[50%]">
      <section>
        {/* section for new quotes */}
        {quotes.length <= 0 ? (
          <>
            <span
              className="mb-4 inline-block w-full text-center text-5xl"
              role="img"
              aria-label="confused-icon"
            >
              🤔
            </span>
            <p className="text-center">
              No famous quote yet? Come on now, Some are actually quite
              inspiring
            </p>
          </>
        ) : (
          <>
            <q className="border border-gray-600 text-[17px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
              magnam consectetur nesciunt vitae! Quisquam quas beatae nostrum
              doloribus porro quaerat atque eveniet mollitia corrupti earum
              autem asperiores, ipsam sed! Minima consectetur veritatis
              perferendis
            </q>
            <p className="text-right text-lg text-gray-300">- Dr seuss</p>
          </>
        )}
      </section>
      <button className="mt-[10px] rounded-sm bg-green-700 p-2 px-6 text-lg transition-all duration-150 hover:bg-green-600">
        Famous quote
      </button>
    </div>
  );
};

export default ShowRandom;
