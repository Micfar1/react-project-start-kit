import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getNames } from "../../apis/NamesAPI";
import { iNestedNames } from "../../models/NestedNames";

export const fetchNames = createAsyncThunk("slice1/fetchNames", async () => {
  const response = await getNames();
  return response;
});

export const sliceNames = createSlice({
  name: "slice1",
  initialState: {
    status: "undeclared",
    names: [] as iNestedNames,
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchNames.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.names = action.payload;
    });
  },
});

export default sliceNames.reducer;
