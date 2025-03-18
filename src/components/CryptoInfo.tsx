import React, { useState } from "react";
import Scene from "./Scene"; // Ensure Scene is correctly imported

const CryptoInfo: React.FC = () => {
  const [showContent, setShowContent] = useState(false);

  return (
    <div className="text-center mt-10">
      <div className="flex items-center justify-center gap-6">
        <Scene />
        <button
          onClick={() => setShowContent(!showContent)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-110"
        >
          Click Me
        </button>
      </div>

      {showContent && (
        <div className="mt-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md text-gray-800 dark:text-gray-300">
          <h2 className="text-2xl font-semibold text-purple-500 dark:text-purple-400">
            More About Crypto
          </h2>
          <p className="mt-2">
            Cryptocurrencies are digital assets that use blockchain technology
            for secure transactions. Bitcoin, Ethereum, and many other coins
            drive innovation in finance.
          </p>
        </div>
      )}
    </div>
  );
};

export default CryptoInfo;
