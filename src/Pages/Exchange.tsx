import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/Store";
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

  useEffect(() => {
    if (fromCurrency && toCurrency) {
      dispatch(fetchExchangeRate({ from: fromCurrency, to: toCurrency }));
    }
  }, [dispatch, toCurrency, fromCurrency]);

  const handleSwap = () => {
    dispatch(setFromCurrency(fromCurrency));
    dispatch(setToCurrency(toCurrency));
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-5">
      <h1 className="text-3xl font-bold mb-5">Crypto Exchange</h1>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
        <CryptoDropdown
          lable="From"
          value={fromCurrency}
          onChange={(currency) => dispatch(setFromCurrency(currency))}
        />
        <button
          onClick={handleSwap}
          className="my-3 bg-blue-500 px-4 py-2 rounded cursor-pointer"
        >
          Swap
        </button>
        <CryptoDropdown
          lable="To"
          value={toCurrency}
          onChange={(currency) => dispatch(setToCurrency(currency))}
        />

        <input
          type="number"
          className="w-full p-2 mt-3 rounded bg-gray-700 text-white"
          value={amount}
          onChange={(e) => dispatch(setAmount(e.target.value))}
        />

        <p className="mt-4">Exchange Rate: {exchangeRate}</p>
        <p className="mt-2 font-bold">Converted: {amount * exchangeRate}</p>
        <button className="mt-4 bg-green-500 px-4 py-2 rounded">
          Exchange
        </button>
      </div>
    </div>
  );
};

export default Exchange;
