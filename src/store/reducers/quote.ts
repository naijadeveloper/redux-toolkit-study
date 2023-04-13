import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import fetchQuote from "../thunk/fetchQuote";

type quote = {
  id: string;
  author: string;
  content: string;
}

type instateType = {
  isLoading: boolean;
  error: boolean;
  quotes: quote[];
}

const inState: instateType = {
  isLoading: false,
  error: false,
  quotes: [] as quote[]
}

const quoteSlice = createSlice({
  name: "quoteSlice",
  initialState: (): instateType => {
    let quotes = localStorage.getItem("quotes");
    return quotes? {...inState, quotes: JSON.parse(quotes)} : inState
  },
  reducers: {
    deleteFromList(state, action: PayloadAction<string>) {
      state.quotes = state.quotes.filter((quote) => quote.id !== action.payload);

      localStorage.setItem("quotes", JSON.stringify(state.quotes));
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchQuote.pending, (state) => {
      state.isLoading = true;
      state.error = false;
    });
    
    builder.addCase(fetchQuote.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    });

    builder.addCase(fetchQuote.fulfilled, (state, action:PayloadAction<quote>) => {
      state.isLoading = false;
      state.error = false;

      if(state.quotes.length == 5) {
        state.quotes.pop();
      }
      state.quotes.unshift(action.payload);

      localStorage.setItem("quotes", JSON.stringify(state.quotes));
    });
  }
});


export const { deleteFromList } = quoteSlice.actions;
export default quoteSlice.reducer;