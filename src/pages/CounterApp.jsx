import React, { useState, useEffect } from "react";

const CounterApp = () => {
  const [count, setCount] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    console.log(`Count : ${count}`);
  }, [count]);

  return (
    <div className="flex flex-col items-center justify-center pt-20 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Counter App</h2>
      <p className="text-4xl mb-4">{count}</p>

      <div className="flex gap-3">
        <button
          onClick={() => setCount(count + 1)}
          className="bg-blue-500 cursor-pointer text-white px-4 py-2 rounded"
        >
          Increment
        </button>

        <button
          onClick={() => setCount(count - 1)}
          className="bg-blue-500 cursor-pointer text-white px-4 py-2 rounded"
        >
          Decrement
        </button>

        <div
          className="relative"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          <button
            onClick={() => setCount(0)}
            className={`px-4 py-2 rounded cursor-pointer text-white ${
              count === 0 ? "bg-gray-400" : "bg-red-500"
            }`}
          >
            Reset
          </button>
          {showTooltip && (
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded">
              Reset
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CounterApp;
