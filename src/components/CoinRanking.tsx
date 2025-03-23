import React, { useEffect, useState } from "react";
import { useGetCoinsQuery } from "../redux/CyptoCoin";
import { useDispatch, useSelector } from "react-redux";
import { fetchNFTs } from "../redux/NftSlice"; // Redux action for fetching NFTs
import { RootState, AppDispatch } from "../redux/Store";
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
  rank: number;
};

const CoinRanking: React.FC = () => {
  const { data: coinsList, error, isLoading } = useGetCoinsQuery();
  const dispatch = useDispatch<AppDispatch>();
  const { nfts, loading: nftLoading, error: nftError } = useSelector((state: RootState) => state.nft);

  const [cryptos, setCryptos] = useState<Crypto[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedInfo, setSelectedInfo] = useState<string>("coin");

  useEffect(() => {
    if (!coinsList?.data?.coins) return;

    const filteredCoins = coinsList.data.coins.filter((coin: Crypto) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setCryptos(filteredCoins);
  }, [coinsList, searchTerm]);

  useEffect(() => {
    if (selectedInfo === "nft") {
      dispatch(fetchNFTs());
    }
  }, [selectedInfo, dispatch]);

  if (isLoading || nftLoading)
    return <p className="text-center text-xl text-gray-400">Loading...</p>;

  if (error || nftError)
    return (
      <p className="text-center text-xl text-red-500">Error fetching data</p>
    );

  const handleToggle = (info: string) => {
    setSelectedInfo(info);
  };

  return (
    <section className="p-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Market Update</h2>
      </div>

      {/* Toggle Buttons */}
      <div className="flex justify-center space-x-4 mb-6">
        <button
          className={`p-3 px-6 rounded-md ${selectedInfo === "coin" ? "bg-green-500" : "bg-gray-700"}`}
          onClick={() => handleToggle("coin")}
        >
          Coin
        </button>
        <button
          className={`p-3 px-6 rounded-md ${selectedInfo === "nft" ? "bg-green-500" : "bg-gray-700"}`}
          onClick={() => handleToggle("nft")}
        >
          NFT
        </button>
      </div>

      {/* Search Input */}
      <div className="flex items-center justify-center">
        <input
          type="text"
          placeholder={`Search ${selectedInfo === "coin" ? "Cryptocurrency" : "NFT"}...`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md px-4 py-2 mb-6 bg-black-100/55 backdrop-blur-lg text-gray-800 rounded-lg shadow-md focus:outline-none focus:ring-2 placeholder:text-white focus:ring-purple-500"
        />
      </div>

      {/* Conditional Table Rendering */}
      {selectedInfo === "coin" ? (
        <table className="w-full text-left p-6 rounded-xl bg-black-100/25 backdrop-blur-lg">
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
            {cryptos.slice(0, 10).map((coin, index) => (
              <tr className="border-b border-gray-700" key={index}>
                <td className="p-2">{coin.rank}</td>
                <td className="p-2">{coin.name}</td>
                <td className="p-2">{millify(coin.price)}</td>
                <td className={`p-2 ${coin.change > 0 ? "text-green-500" : "text-red-500"}`}>
                  {coin.change}
                </td>
                <td className="p-2">{millify(coin.marketCap)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <table className="w-full text-left p-6 rounded-xl bg-black-100/25 backdrop-blur-lg">
          <thead>
            <tr className="text-gray-400">
              <th className="p-2">#</th>
              <th className="p-2">Name</th>
              <th className="p-2">Symbol</th>
            </tr>
          </thead>
          <tbody>
            {nfts.slice(0, 10).map((nft, index) => (
              <tr className="border-b border-gray-700" key={index}>
                <td className="p-2">{index + 1}</td>
                <td className="p-2">{nft.name}</td>
                <td className="p-2">{nft.symbol}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
};

export default CoinRanking;
