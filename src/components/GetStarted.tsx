import React from "react";
import { FaWallet, FaUserPlus } from "react-icons/fa";
import { RiCoinsFill } from "react-icons/ri";

const GetStarted: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between gap-6">
      {/* Left Side - Heading and Button */}
      <div className="flex flex-col items-start gap-4 sm:w-[50%]">
        <h2 className="text-3xl font-bold mb-4">How To Get Started</h2>
        <p className="text-gray-300">
          Simple and easy way to start investing in cryptocurrencies.
        </p>
        <button className="bg-green-400 px-4 py-2 rounded-xl text-white font-semibold">
          Get Started
        </button>
      </div>

      {/* Right Side - Steps */}
      <div className="flex flex-col gap-6 sm:w-[50%]">
        {[
          {
            name: "Create Your Account",
            img: <FaUserPlus size={30}  />,
            desc: "Your account and personal identity are guaranteed safe.",
          },
          {
            name: "Connect Bank Account",
            img: <FaWallet size={30}  />,
            desc: "Connect your bank account to start transactions.",
          },
          {
            name: "Start Building Portfolio",
            img: <RiCoinsFill size={30}  />,
            desc: "Buy and sell popular currencies and keep track of them.",
          },
        ].map((step, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-4 border border-white/20 rounded-lg shadow-lg bg-black/20"
          >
            <div className=" bg-black-100/15 backdrop-blur-lg w-20 h-20 flex items-center justify-center rounded-full mb-4 text-white text-3x">{step.img}</div>
            <div className="text-left">
              <h3 className="text-lg font-semibold">{step.name}</h3>
              <p className="text-gray-400">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetStarted;
