// import React, { useState, useEffect } from "react";

// const CounterApp = () => {
//   const [count, setCount] = useState(0);
//   const [showTooltip, setShowTooltip] = useState(false);

//   useEffect(() => {
//     console.log(`Count : ${count}`);
//   }, [count]);

//   return (
//     <div className="flex flex-col items-center justify-center pt-20 bg-gray-100">
//       <h2 className="text-2xl font-bold mb-4">Counter App</h2>
//       <p className="text-4xl mb-4">{count}</p>

//       <div className="flex gap-3">
//         <button
//           onClick={() => setCount(count + 1)}
//           className="bg-blue-500 cursor-pointer text-white px-4 py-2 rounded"
//         >
//           Increment
//         </button>

//         <button
//           onClick={() => setCount(count - 1)}
//           className="bg-blue-500 cursor-pointer text-white px-4 py-2 rounded"
//         >
//           Decrement
//         </button>

//         <div
//           className="relative"
//           onMouseEnter={() => setShowTooltip(true)}
//           onMouseLeave={() => setShowTooltip(false)}
//         >
//           <button
//             onClick={() => setCount(0)}
//             className={`px-4 py-2 rounded cursor-pointer text-white ${
//               count === 0 ? "bg-gray-400" : "bg-red-500"
//             }`}
//           >
//             Reset
//           </button>
//           {showTooltip && (
//             <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded">
//               Reset
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CounterApp;
import React, { useState, useEffect } from "react";

const CounterApp = () => {
  const [count, setCount] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    console.log(`Count changed to: ${count}`);
  }, [count]);

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className=" flex flex-col items-center justify-center bg-gray-100 p-4 mt-20">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-center">
        React Counter App
      </h1>

      <div className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
        {count}
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => setCount(count + 1)}
          className="bg-green-500 hover:bg-green-600 text-white hover:text-black px-6 py-2 rounded-lg shadow cursor-pointer w-full sm:w-auto"
        >
          Increment
        </button>
        <button
          onClick={() => setCount(count - 1)}
          className="bg-red-500 hover:bg-red-600 text-white hover:text-black px-6 py-2 rounded-lg shadow cursor-pointer w-full sm:w-auto"
        >
          Decrement
        </button>
        <button
          onClick={handleReset}
          className={`${
            count === 0
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          } text-white px-6 py-2 rounded-lg shadow cursor-pointer w-full sm:w-auto`}
          disabled={count === 0}
        >
          Reset
        </button>
      </div>

      <div
        className="mt-6 relative"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <button className="bg-purple-500 text-white px-4 py-2 rounded-lg shadow cursor-pointer hover:bg-purple-700">
          Hover me
        </button>
        {showTooltip && (
          <div className="absolute bottom-full mb-2 bg-black text-white text-sm px-3 py-1 rounded shadow-lg whitespace-nowrap z-10">
            This is a tooltip!
          </div>
        )}
      </div>
    </div>
  );
};

export default CounterApp;