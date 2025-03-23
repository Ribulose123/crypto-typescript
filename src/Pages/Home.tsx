import React from "react";
import CoinRanking from "../components/CoinRanking";
import { TbCircleLetterC } from "react-icons/tb";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { FaBitcoin } from "react-icons/fa";
import { MdOutlinePlayLesson } from "react-icons/md";
import FAQ from "../components/FAQ";

import CoinCard from "../components/CoinCard";
import GetStarted from "../components/GetStarted";

const Home: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-purple-900 to-black text-white min-h-screen">
     
     {/* Hero Section */}
     <section className="text-center py-20 px-6">
        <h2 className="text-4xl font-bold mb-4">Invest in Cryptocurrency</h2>
        <p className="text-lg max-w-2xl mx-auto mb-6">The best way to manage and trade cryptocurrencies securely and efficiently.</p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-md">Get Started</button>
      </section>

      {/* Coin Ranking */}
      <section className="p-6">
        <CoinCard/>
        {/* <CoinRanking /> */}
      </section>

       {/* Features Section */}
{/* Features Section */}
<section className="py-16 px-6 rounded-xl mx-4">
  <h2 className="text-3xl font-bold text-center mb-8 text-white">CryptoCap Amazing Features</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
    {[
      { name: "Manage Portfolio", icon: <TbCircleLetterC size={50} />, desc: "Stay ahead with the latest market trends and price movements." },
      { name: "Protected Securely", icon: <AiOutlineSafetyCertificate size={50} />, desc: "Use our AI algorithms to predict market trends and optimize investments." },
      { name: "Cryptocurrency Variety", icon: <FaBitcoin size={50} />, desc: "Invest in digital assets with full support for NFTs and decentralized apps." },
      { name: "Learn Best Practices", icon: <MdOutlinePlayLesson size={50} />, desc: "We ensure all transactions are encrypted and secure." },
    ].map((feature, index) => (
      <div 
        key={index} 
        className="backdrop-blur-lg bg-black/25 border border-white/20 p-8 rounded-2xl shadow-lg max-w-sm text-white flex flex-col items-start"
      >
        {/* Align icon and text to the start */}
        <div className=" bg-black-100/15 backdrop-blur-lg w-20 h-20 flex items-center justify-center rounded-full mb-4 text-white text-3xl">{feature.icon}</div>
        <h3 className="text-xl font-semibold mb-2">{feature.name}</h3>
        <p className="text-gray-400">{feature.desc}</p>
      </div>
    ))}
  </div>
</section>


<section className="py-16 px-6 overflow-x-auto">
  <CoinRanking/>
</section>

<section className="py-16 px-6  mx-4">
       <GetStarted/>
      </section>
      
     

      {/* FAQ */}
      <div>
        <FAQ />
      </div>

      {/* Footer Section */}
      <footer className=" text-black dark:text-white text-center py-6 mt-10">
        <p>&copy; {new Date().getFullYear()} Crypto Financial Solutions. All rights reserved.</p>
      </footer>
    </section>
  );
};

export default Home;
