import React, { useEffect, useState } from "react";
import { useGetCoinsQuery } from "../redux/CyptoCoin";
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

const CoinRanking: React.FC = () => {
  const { data: coinsList, error, isLoading } = useGetCoinsQuery();
  const [cryptos, setCryptos] = useState<Crypto[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  
  console.log(cryptos);
  

  useEffect(() => {
    if (!coinsList?.data?.coins) return;

    const filteredCoins = coinsList.data.coins.filter((coin: Crypto) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setCryptos(filteredCoins);
  }, [coinsList, searchTerm]);

  if (isLoading)
    return <p className="text-center text-xl text-gray-400">Loading...</p>;

  if (error)
    return (
      <p className="text-center text-xl text-red-500">Error fetching data</p>
    );

  if (!coinsList?.data?.coins)
    return <p className="text-center text-gray-400">No data available</p>;

  return (
    <section className="">
      <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-center mb-8">Market Update</h2>
        
      </div>

      {/* Search Input */}
      <div className="flex items-center justify-center">
        <input
          type="text"
          placeholder="Search Cryptocurrency..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md px-4 py-2 mb-6 bg-black-100/55 backdrop-blur-lg text-gray-800 rounded-lg shadow-md focus:outline-none focus:ring-2 placeholder:text-white focus:ring-purple-500"
        />
      </div>

      {/* Crypto Grid */}
      <table className="w-full text-left  p-6 rounded-xl bg-black-100/25 backdrop-blur-lg">
        <thead>
        <tr className="text-gray-400">
              <th className="p-2">#</th>
              <th className="p-2">Name</th>
              <th className="p-2">Last Price</th>
              <th className="p-2">Change</th>
              <th className="p-2">Cap</th>
            </tr>
        </thead>
        <tbody>
          {cryptos.slice(0, 10).map((coin, index)=>(
            <tr className="border-b border-gray-700" key={index}>
              <td className="p-2">{coin.rank}</td>
              <td className="p-2">{coin.name}</td>
              <td className="p-2">{millify(coin.price)}</td>
              <td className={`p-2 ${coin.change > 0 ? 'text-green-500' : 'text-red-500'}`}>{coin.change}</td>
              <td className="p-2">{millify(coin.marketCap)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default CoinRanking;
