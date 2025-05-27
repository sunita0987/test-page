import React from "react";
import { products } from "../utils/helper";

const About = () => {
  return (
    <div className="pt-20">
      <h1 className="text-3xl font-bold text-center mb-6">Product List</h1>
      <div className="p-4 grid md:grid-cols-3 gap-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all"
          >
            <h2 className="text-xl font-bold mb-1">{product.name}</h2>
            <p className="text-green-600 text-lg font-semibold mb-2">
              {product.price}
            </p>
            <ul className="list-disc list-inside text-sm text-gray-700">
              {product.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
export default About;
