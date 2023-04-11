import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchQuote = createAsyncThunk("quote/fetching", async () => {
  const result = await fetch(
    "https://api.quotable.io/random?maxLength=200&tags=famous-quotes"
  );
  const data = await result.json();
  return { id: data.id, author: data.author, content: data.content };
});

export default fetchQuote;
