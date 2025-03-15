import React from "react";

import CoinRanking from "../components/CoinRanking";

const Home: React.FC = () => {
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
        <CoinRanking/>
      </div>
    </section>
  );
};

export default Home;
