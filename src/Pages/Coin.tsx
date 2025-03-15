import React from "react";
import { useParams } from "react-router-dom";
import { useGetCoinDetailsQuery } from "../redux/CyptoCoin"; // Import API hook
import millify from "millify";



const Coin:React.FC = () => {
  const { coinId } = useParams<{ coinId?: string }>();
const { data: coinData, error: coinError, isLoading: coinLoading } = useGetCoinDetailsQuery(coinId ?? "");

 
  if(coinLoading ) return <p className="text-green-500">Loading....</p>
  if (coinError ) return <p className="text-green-500">Error fetching data</p>

  if(!coinData?.data.coin )
    return  <p className="text-center text-gray-400">No data available</p>;

 
  
  console.log(coinData);
  

  const coin = coinData.data.coin;
 

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
     <div className="flex flex-col items-center mb-10">
        <img
          src={coin.iconUrl}
          alt={coin.name}
          className="w-24 h-24 mb-4 rounded-full border border-gray-500"
        />
        <h2 className="text-3xl font-extrabold text-purple-400">{coin.name}</h2>
        <p className="text-gray-400 text-lg">{coin.symbol}</p>

        <div className="mt-4 bg-gray-800 p-6 rounded-xl shadow-md text-center">
          <p className="text-lg">
            💰 Price: <span className="font-semibold">${millify(coin.price)}</span>
          </p>
          <p className="text-lg">
            📊 Market Cap: <span className="font-semibold">${millify(coin.marketCap)}</span>
          </p>
          <p className="text-lg">
            📈 Daily Change:{" "}
            <span className={`${coin.change > 0 ? "text-green-400" : "text-red-400"} font-semibold`}>
              {coin.change}%
            </span>
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default Coin;
