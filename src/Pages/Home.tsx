import React, { useState } from "react";
import CoinRanking from "../components/CoinRanking";
import FAQ from "../components/FAQ";

const Home: React.FC = () => {

  const [showContent, setShowContent] = useState<boolean>(false)
  return (
    <section>
      <div
        className="relative min-h-screen bg-black text-white flex items-center justify-center px-6"
        style={{
          backgroundImage: "url('/img/robo.avif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/*   <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-purple-900 opacity-60"></div> */}
        <div className="relative text-center max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Innovative Crypto Financial Solutions <br />
            <span className="text-purple-400">
              For Any Investment Challenge
            </span>
          </h1>
          <p className="mt-4 text-gray-300 text-lg">
            We don't just focus on investments; we cover your entire financial.
            ecosystem, from budgeting to retiremen
          </p>
          <button className="mt-6 bg-purple-500 hover:bg-purple-700 text-white py-3 px-6 rounded-lg text-lg font-medium relative">
            Get Started
          </button>

          <div className="fixed bottom-0 w-full left-0 mx-auto bg-white/35">
            <div className="w-full max-w-7xl mx-auto overflow-hidden">
              {/*  <Maquee /> */}
            </div>
          </div>
        </div>
      </div>
      <div className="text-white">
        <CoinRanking />
      </div>

      {/* About Us */}
      <div className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold">About Our Platform</h2>
          <p className="mt-4 text-gray-400">
            Our platform provides real-time cryptocurrency insights, analysis,
            and investment opportunities. We empower users with the knowledge
            needed to navigate the digital economy.
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-gray-100 dark:bg-gray-900 text-black dark:text-white py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-8 text-center">
          {/* Real-Time Insights */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-full sm:w-auto flex-1">
            <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400">
              Real-Time Insights
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Stay ahead with the latest market trends and price movements.
            </p>
          </div>

          {/* Secure Transactions */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-full sm:w-auto flex-1">
            <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400">
              Secure Transactions
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              We ensure all transactions are encrypted and secure.
            </p>
          </div>

          {/* Expert Analysis */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-full sm:w-auto flex-1">
            <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400">
              Expert Analysis
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Get advice from crypto industry leaders and experts.
            </p>
          </div>

          {/* Low Transaction Fees */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-full sm:w-auto flex-1">
            <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400">
              Low Transaction Fees
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Save money with our low-fee trading and withdrawal options.
            </p>
          </div>

          {/* AI-Powered Predictions */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-full sm:w-auto flex-1">
            <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400">
              AI-Powered Predictions
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Use our AI algorithms to predict market trends and optimize
              investments.
            </p>
          </div>

          {/* NFT & Web3 Support */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-full sm:w-auto flex-1">
            <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400">
              NFT & Web3 Integration
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Invest in digital assets with full support for NFTs and
              decentralized apps.
            </p>
          </div>
        </div>
        <div className="text-center mt-10">
          <button
            onClick={() => setShowContent(!showContent)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-110"
          >
            Click Me
          </button>

          {showContent && (
            <div className="mt-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md text-gray-800 dark:text-gray-300">
              <h2 className="text-2xl font-semibold text-purple-500 dark:text-purple-400">More About Crypto</h2>
              <p className="mt-2">
                Cryptocurrencies are digital assets that use blockchain technology for secure transactions.
                Bitcoin, Ethereum, and many other coins drive innovation in finance.
              </p>
            </div>
          )}
        </div>
      </div>

      <div>
        <FAQ />
      </div>
    </section>
  );
};

export default Home;
