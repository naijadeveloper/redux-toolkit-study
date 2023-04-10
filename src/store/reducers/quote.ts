import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

type quote = {
  id: ReturnType<typeof nanoid>;
  author: string;
  content: string;
}

type instateType = {
  quotes: quote[];
}

const quoteSlice = createSlice({
  name: "quoteSlice",
  initialState: (): instateType => {
    let quote = localStorage.getItem("quotes");
    return quote? {quotes: JSON.parse(quote)} : {quotes: [] as quote[]}
  },
  reducers: {
    deleteFromList(state, action: PayloadAction<string>) {

    }
  }
});


export const { deleteFromList } = quoteSlice.actions;
export default quoteSlice.reducer;