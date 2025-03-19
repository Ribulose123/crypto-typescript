import React from "react";
import CoinRanking from "../components/CoinRanking";
import FAQ from "../components/FAQ";
import CryptoInfo from "../components/CryptoInfo";

const Home: React.FC = () => {
  return (
    <section className="bg-white dark:bg-black text-black dark:text-white">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Innovative Crypto Financial Solutions <br />
            <span className="text-purple-600 dark:text-purple-400">
              For Any Investment Challenge
            </span>
          </h1>
          <p className="mt-4 text-gray-700 dark:text-gray-300 text-lg">
            We don't just focus on investments; we cover your entire financial
            ecosystem, from budgeting to retirement.
          </p>
          <button className="mt-6 bg-purple-500 hover:bg-purple-700 text-white py-3 px-6 rounded-lg text-lg font-medium">
            Get Started
          </button>
        </div>
      </div>

      {/* Coin Ranking */}
      <div>
        <CoinRanking />
      </div>

      {/* About Us */}
      <div className="bg-gray-200 dark:bg-gray-900 py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold">About Our Platform</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Our platform provides real-time cryptocurrency insights, analysis,
            and investment opportunities. We empower users with the knowledge
            needed to navigate the digital economy.
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-gray-100 dark:bg-gray-900 py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-8 text-center">
          {[
            {
              title: "Real-Time Insights",
              desc: "Stay ahead with the latest market trends and price movements.",
            },
            {
              title: "Secure Transactions",
              desc: "We ensure all transactions are encrypted and secure.",
            },
            {
              title: "Expert Analysis",
              desc: "Get advice from crypto industry leaders and experts.",
            },
            {
              title: "Low Transaction Fees",
              desc: "Save money with our low-fee trading and withdrawal options.",
            },
            {
              title: "AI-Powered Predictions",
              desc: "Use our AI algorithms to predict market trends and optimize investments.",
            },
            {
              title: "NFT & Web3 Integration",
              desc: "Invest in digital assets with full support for NFTs and decentralized apps.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-full sm:w-auto flex-1"
            >
              <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400">
                {item.title}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Centered Crypto Info Section */}
        <div className="flex flex-col items-center mt-16">
          <CryptoInfo />
        </div>
      </div>

      {/* FAQ */}
      <div>
        <FAQ />
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-300 dark:bg-gray-800 text-black dark:text-white text-center py-6 mt-10">
        <p>&copy; {new Date().getFullYear()} Crypto Financial Solutions. All rights reserved.</p>
      </footer>
    </section>
  );
};

export default Home;
