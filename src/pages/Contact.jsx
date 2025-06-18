import React from "react";
import { inputGroups } from "../utils/helper";

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="pt-20 pb-10">
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto p-10 space-y-6 bg-amber-100 shadow-lg rounded-lg"
      >
        {inputGroups.map((group, Index) => (
          <div key={Index} className="flex flex-col md:flex-row gap-4">
            {group.map((input, inputIndex) => (
              <input
                key={inputIndex}
                type={input.type}
                placeholder={input.placeholder}
                className="w-full p-3 border border-black font-normal text-base rounded-md focus:outline-none focus:ring focus:ring-black"
              />
            ))}
          </div>
        ))}
        <textarea
          placeholder="About Me"
          className="w-full p-2 border border-black rounded h-24 resize-none font-normal text-base focus:outline-none focus:ring focus:ring-black"
        ></textarea>
        <div className="justify-center flex">
          <button className="bg-black text-white px-8 cursor-pointer py-2 rounded-full">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
