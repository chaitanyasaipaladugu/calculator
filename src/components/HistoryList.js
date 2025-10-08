import React from "react";
import { useSelector } from "react-redux";
function HistoryList() {
  const history = useSelector((state) => state.calculator.history);
  return (
    <div style={{ marginTop: "20px" }}>
      <h3>History</h3>
      <ul>
        {history.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
export default HistoryList;
