import { useState } from "react";
import  add  from "../utils/stringCalculator";


const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const handleCalculate = () => {
    try {
      setResult(add(input));
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="flex flex-col items-center p-8 bg-gray-100 rounded-xl shadow-lg w-full max-w-md mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        String Calculator
      </h1>

      <div className="relative w-full">
        <input
          className="border-2 border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 rounded-lg p-3 w-full text-lg outline-none transition-all duration-200"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter numbers (e.g. 1,2,3)"
        />
      </div>

      <button
        className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-200 shadow-md"
        onClick={handleCalculate}
      >
        Calculate
      </button>

      {result !== null && (
        <h2 className="mt-6 text-2xl font-semibold text-green-600 bg-green-100 p-3 rounded-lg shadow-md">
          Result: {result}
        </h2>
      )}
    </div>
  );
};

export default Calculator;