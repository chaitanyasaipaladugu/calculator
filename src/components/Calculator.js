import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  appendValue,
  clearDisplay,
  calculateResult,
  deleteLast,
} from "../redux/CalculatorSlice";
function Calculator() {
  const display = useSelector((state) => state.calculator.display);
  const dispatch = useDispatch();

  const buttons = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "=",
    "+",
  ];
  const handleClick = (value) => {
    if (value === "=") return dispatch(calculateResult());
    dispatch(appendValue(value));
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Calculator</h2>
      <input type="text" value={display} readOnly />
      <div>
        {buttons.map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)}>
            {btn}
          </button>
        ))}
      </div>
      <div>
        <button onClick={() => dispatch(deleteLast())}>DEL</button>
        <button onClick={() => dispatch(clearDisplay())}>CLEAR</button>
      </div>
    </div>
  );
}
export default Calculator;
