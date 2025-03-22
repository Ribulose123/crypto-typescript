import React from 'react'
import { useGetCoinsQuery } from '../redux/CyptoCoin'
import millify from 'millify'
import { Link } from 'react-router-dom';

const CoinCard: React.FC = () => {
     const { data: coinsList, error, isLoading } = useGetCoinsQuery();

     if (isLoading)
        return <p className="text-center text-xl text-gray-400">Loading...</p>;
    
      if (error)
        return (
          <p className="text-center text-xl text-red-500">Error fetching data</p>
        );
    
      if (!coinsList?.data?.coins)
        return <p className="text-center text-gray-400">No data available</p>;

  return (
    <div>
       <h3 className="text-2xl font-bold text-center">Market Trend</h3>
       <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mt-6'>
            {coinsList?.data.coins.slice(0, 4).map((coin) => (
                <Link 
                  to={`/coins/${coin.uuid}`} 
                  className='bg-black-300/10 backdrop-blur-lg p-6 rounded-xl border border-white/20 shadow-lg hover:scale-105 transition-transform duration-300'
                >
                  <div className='flex gap-4 items-center border-b border-white/20 pb-3'>
                    <img src={coin.iconUrl} alt={coin.name} className='w-10 h-10 rounded-full'/>
                    <div className=' flex items-center justify-between sm:flex-row flex-col sm:gap-4'>
                      <h4 className='text-[12px] sm:text-[16px] text-white'>{coin.symbol}</h4>
                      <h2 className='sm:text-[20px] text-[18px] text-white font-semibold'>{coin.name}</h2>
                    </div>
                  </div>
                  <div className="mt-2 text-gray-300">
                    <p className="text-sm">
                      💰 Price: <span className="font-semibold text-white">${millify(coin.price)}</span>
                    </p>
                    <p className="text-sm">
                      📊 Market Cap: <span className="font-semibold text-white">${millify(coin.marketCap)}</span>
                    </p>
                  </div>
                </Link>
            ))}
       </div>
    </div>
  )
}

export default CoinCard
