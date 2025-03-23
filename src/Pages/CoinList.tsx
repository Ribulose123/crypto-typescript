import React, { useEffect, useState } from 'react'
import { useGetCoinsQuery } from '../redux/CyptoCoin'
import { Link } from 'react-router-dom';
import millify from "millify";
type Crypto = {
    id: string;
    uuid: string;
    name: string;
    symbol: string;
    price: number;
    marketCap: number;
    change: number;
    iconUrl: string;
    rank:number;
  };

const CoinList:React.FC = () => {
    const {data:coins, error, isLoading}= useGetCoinsQuery();
     const [cryptos, setCryptos] = useState<Crypto[]>([]);
      const [searchTerm, setSearchTerm] = useState("");

      useEffect(()=>{
        if(!coins?.data?.coins) return 

        const fetchCoin = coins.data.coins.filter((coin:Crypto)=>coin.name.toLowerCase().includes(searchTerm.toLowerCase()))

        setCryptos(fetchCoin)
      },[coins, searchTerm])

      if (isLoading)
        return <p className="text-center text-xl text-gray-400">Loading...</p>;
    
      if (error)
        return (
          <p className="text-center text-xl text-red-500">Error fetching data</p>
        );
    
      if (!coins?.data?.coins)
        return <p className="text-center text-gray-400">No data available</p>;
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-purple-900 to-black text-white px-6">
    {/* Search Input */}
    <div className="max-w-4xl mx-auto my-6">
      <input
        type="text"
        placeholder="Search for a coin..."
        className="w-full p-2 text-black rounded-md bg-white"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>

    {/* Coin Grid */}
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {cryptos.slice(0, 30).map((coin) => (
          <Link key={coin.uuid} to={`/coins/${coin.uuid}`}>
            <div className="p-4 bg-gray-300/10 backdrop-blur-lg rounded-lg shadow-md  transition w-full aspect-square flex flex-col justify-between">
              {/* Header (Rank, Name, Icon) */}
              <div className="flex items-center justify-between border-b w-full p-2">
                <p className="text-lg font-semibold">
                  <span className="text-gray-400">{coin.rank}.</span> {coin.name}
                </p>
                <img src={coin.iconUrl} alt={coin.name} className="w-10 h-10" />
              </div>

              {/* Details Section */}
              <div className="flex flex-col gap-2">
                <p className="text-gray-300 text-sm">
                  💰 Price: <span className="font-semibold">${millify(coin.price)}</span>
                </p>
                <p className="text-gray-300 text-sm">
                  📊 Market Cap: <span className="font-semibold">${millify(coin.marketCap)}</span>
                </p>
                <p className="text-sm">
                  📈 Daily Change:{" "}
                  <span
                    className={`${
                      coin.change > 0 ? "text-green-400" : "text-red-400"
                    } font-semibold`}
                  >
                    {coin.change}%
                  </span>
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
  </div>
  )
}

export default CoinList
