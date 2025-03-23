import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/Store";
import { FaExchangeAlt } from "react-icons/fa";
import {
  setAmount,
  setFromCurrency,
  setToCurrency,
  fetchExchangeRate,
} from "../redux/ExchangeSclice";
import CryptoDropdown from "../components/CryptoDropdown";

const Exchange: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { fromCurrency, toCurrency, amount, exchangeRate } = useSelector(
    (state: RootState) => state.exchange
  );

  const [status, setStatus] = useState<"idle" | "swapping" | "success" | "failed">("idle");

  useEffect(() => {
    if (fromCurrency && toCurrency) {
      dispatch(fetchExchangeRate({ from: fromCurrency, to: toCurrency }));
    }
  }, [dispatch, fromCurrency, toCurrency]);

  const handleSwap = () => {
    if (!fromCurrency || !toCurrency) {
      setStatus("failed");
      return;
    }

    setStatus("swapping");

    setTimeout(() => {
      dispatch(setFromCurrency(toCurrency));
      dispatch(setToCurrency(fromCurrency));

      setTimeout(() => {
        setStatus("success");
      }, 2000);
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-purple-900 to-black text-white p-5">
      <h1 className="text-3xl font-bold mb-5">Crypto Exchange</h1>
      <div className="bg-gray-100/10 backdrop-blur-lg p-6 rounded-lg shadow-lg w-full max-w-md">
        <CryptoDropdown
          lable="From"
          value={fromCurrency}
          onChange={(currency) => dispatch(setFromCurrency(currency))}
        />
        <div className="flex justify-center items-center mt-6">
        <FaExchangeAlt className="text-2xl"/>
        </div>
               <CryptoDropdown
          lable="To"
          value={toCurrency}
          onChange={(currency) => dispatch(setToCurrency(currency))}
        />

        <input
          type="number"
          className="w-full p-2 mt-3 rounded bg-gray-700 text-white"
          value={amount}
          onChange={(e) => dispatch(setAmount(Number(e.target.value)))}
        />

        <p className="mt-4">Exchange Rate: {exchangeRate}</p>
        <p className="mt-2 font-bold">Converted: {amount * exchangeRate}</p>
        <button
          onClick={handleSwap}
          className="my-3 bg-blue-500 px-4 py-2 rounded cursor-pointer transition-all hover:bg-blue-600"
        >
          Swap
        </button>

      </div>

      {/* Animated Modal */}
      <AnimatePresence>
        {status !== "idle" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="absolute top-[50%] left[50%] w-[50%] h-[50%] flex items-center justify-center bg-black-100/50"
          >
            <motion.div
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              exit={{ y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white text-black p-6 rounded-lg shadow-xl"
            >
              {status === "swapping" && (
                <div className="flex flex-col items-center">
                  <p className="text-lg font-semibold">Swapping...</p>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full mt-4"
                  />
                </div>
              )}

              {status === "success" && (
                <div className="text-center">
                  <p className="text-lg font-semibold text-green-500">Swap Successful ✅</p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                  >
                    Done
                  </button>
                </div>
              )}

              {status === "failed" && (
                <div className="text-center">
                  <p className="text-lg font-semibold text-red-500">Swap Failed ❌</p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Try Again
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Exchange;
