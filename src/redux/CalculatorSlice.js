import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  display: "",
  history: [],
};
const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    appendValue: (state, action) => {
      state.display += action.payload;
    },
    clearDisplay: (state) => {
      state.display = "";
    },
    calculateResult: (state) => {
      try {
        const result = eval(state.display);
        state.history.push(`${state.display}=${result}`);
        state.display = String(result);
      } catch {
        state.display = "Error";
      }
    },
    deleteLast: (state) => {
      state.display = state.display.slice(0, -1);
    },
  },
});

export const { appendValue, calculateResult, deleteLast, clearDisplay } =
  calculatorSlice.actions;
export default calculatorSlice.reducer;
