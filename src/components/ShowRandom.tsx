import { useSelector, useDispatch } from "react-redux";
import type { rootState, appDispatch } from "../store";
import fetchQuote from "../store/thunk/fetchQuote";

const ShowRandom = () => {
  const { isLoading, error, quotes } = useSelector(
    (state: rootState) => state.quote
  );
  const dispatch: appDispatch = useDispatch();

  function handleFetching() {
    dispatch(fetchQuote());
  }

  return (
    <div className="flex w-[90%] flex-col items-center justify-center rounded-md bg-gray-900 p-[20px] drop-shadow-[0px_0px_50px_seagreen] md:w-[70%] lg:w-[50%]">
      <section>
        {/* section for new quotes */}
        {isLoading || error || quotes.length <= 0 ? (
          <>
            <span
              className="mb-4 inline-block w-full text-center text-5xl"
              role="img"
              aria-label="confused-icon"
            >
              {isLoading && "😊"}
              {error && "😐"}
              {quotes.length <= 0 && "🤔"}
            </span>
            <p className="text-center">
              {isLoading && "It's coming"}
              {error && "You got an error instead. Sorry!!"}
              {quotes.length <= 0 &&
                `No famous quote yet? Come on now, Some are actually quite
              inspiring`}
            </p>
          </>
        ) : (
          <>
            <q className="border border-gray-600 text-[18px]">
              {`${quotes[0].content}`}
            </q>
            <p className="text-right text-lg text-gray-300">
              - {`${quotes[0].author}`}
            </p>
          </>
        )}
      </section>
      <button
        onClick={handleFetching}
        className="mt-[10px] rounded-sm bg-green-700 p-2 px-6 text-lg transition-all duration-150 hover:bg-green-600"
      >
        Inspire Moi
      </button>
    </div>
  );
};

export default ShowRandom;
