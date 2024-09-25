import { useState } from "react";
import { getAdd } from "../Utils/getAdd";

const StringCalculator = () => {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    setResult(getAdd(inputValue))
    setInputValue("");
  }

  return (
    <>
      <h2>String Calculator</h2>
      <input
        type="text"
        placeholder="Enter a string"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleCalculate}>Calculate</button>

      {result>=0 && result!=null ? <h4>Sum of numbers: {result}</h4>: null}
    </>
  );
};

export default StringCalculator;
