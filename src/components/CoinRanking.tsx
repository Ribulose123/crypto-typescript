import React, { useEffect, useState } from "react";
import { useGetCoinsQuery } from "../redux/CyptoCoin";
import millify from "millify";
import { Link } from "react-router-dom";

type Crypto = {
  id: string;
  uuid: string;
  name: string;
  symbol: string;
  price: number;
  marketCap: number;
  change: number;
  iconUrl: string;
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
    <section className="min-h-screen bg-gray-900 text-white py-6 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold mb-4 text-purple-400">
          Top 10 Cryptocurrencies
        </h1>
        <p className="text-gray-300 text-lg mb-8">
          Stay updated with the latest crypto trends.
        </p>
      </div>

      {/* Search Input */}
      <div className="flex items-center justify-center">
        <input
          type="text"
          placeholder="Search Cryptocurrency..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md px-4 py-2 mb-6 bg-white text-gray-800 rounded-lg shadow-md focus:outline-none focus:ring-2 placeholder:text-black-100 focus:ring-purple-500"
        />
      </div>

      {/* Crypto Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {cryptos.slice(0, 10).map((coin) => (
          <Link
            to={`/coins/${coin.uuid}`}
            key={coin.uuid}
            className="p-4 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 transition w-full aspect-square flex flex-col justify-between"
          >
            {/* Crypto Icon */}
            <img
              src={coin.iconUrl}
              alt={coin.name}
              className="w-14 h-14 mr-6 rounded-full border border-gray-500"
            />

            {/* Coin Details */}
            <div className="flex flex-col">
              <h2 className="text-lg font-semibold">{coin.name}</h2>
              <p className="text-gray-400 text-sm">{coin.symbol}</p>
              <p className="text-gray-300 text-sm mt-2">
                💰 Price:{" "}
                <span className="font-semibold">${millify(coin.price)}</span>
              </p>
              <p className="text-gray-300 text-sm">
                📊 Market Cap:{" "}
                <span className="font-semibold">${millify(coin.marketCap)}</span>
              </p>
              <p className="text-sm mt-1">
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
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CoinRanking;
