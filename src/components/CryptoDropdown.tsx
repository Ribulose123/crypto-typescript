import React from 'react'

interface CryptoDropdownProps{
    lable:string;
    value:string;
    onChange:(value:string)=>void
}
const CryptoDropdown:React.FC<CryptoDropdownProps> = ({lable, value, onChange}) => {

    const option = ['BTC', 'ETH', 'BNB', 'LTC']
  return (
    <div>
      <label className="block text-white">{lable}</label>
      <select  onChange={(e)=>onChange(e.target.value)} value={value} className='w-full p-2 rounded bg-gray-700 text-white'>
        {option.map((currency)=>(
            <option value={currency} key={currency}>
                {currency}
            </option>
        ))}
      </select>
    </div>
  )
}

export default CryptoDropdown
