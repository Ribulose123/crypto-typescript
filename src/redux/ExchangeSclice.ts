import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface ExchangeSclice{
    fromCurrency: string;
    toCurrency:string;
    amount: number;
    exchangeRate: number;
}

const initialState: ExchangeSclice={
    fromCurrency:'BTC',
    toCurrency:'ETH',
    amount:1,
    exchangeRate:0,
}

const cryptoIdMap: { [key: string]: string } = {
    BTC: "bitcoin",
    ETH: "ethereum",
    USDT: "tether",
    BNB: "binancecoin",
    XRP: "ripple",
    ADA: "cardano",
    DOGE: "dogecoin",
    SOL: "solana",
    LTC: "litecoin",
    DOT: "polkadot",
};

export const fetchExchangeRate = createAsyncThunk(
    'exchange/fetchExchangeRate',
    async ({ from, to }: { from: string; to: string }) => {
        try {
            // Convert symbols to Coingecko IDs
            const fromId = cryptoIdMap[from] || from.toLowerCase();
            const toId = cryptoIdMap[to] || to.toLowerCase();

            const res = await fetch(
                `https://api.coingecko.com/api/v3/simple/price?ids=${fromId},${toId}&vs_currencies=usd`
            );

            if (!res.ok) {
                throw new Error(`API request failed with status: ${res.status}`);
            }

            const data = await res.json();

            if (!data[fromId] || !data[toId]) {
                throw new Error("Invalid currency data received");
            }

            return data[toId].usd / data[fromId].usd;
        } catch (error) {
            console.error("Error fetching exchange rate:", error);
            return 0; // Return 0 in case of failure
        }
    }
);



const exchangeSlice = createSlice({
    name:'exchange',
    initialState,
    reducers:{
        setFromCurrency: (state, action)=>{
            state.fromCurrency =action.payload
        },
        setToCurrency:(state, action)=>{
            state.toCurrency = action.payload
        },
        setAmount: (state, action)=>{
            state.amount = action.payload
        },

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchExchangeRate.fulfilled, (state, action)=>{
            state.exchangeRate = action.payload
        })
    }
})

export  const {setFromCurrency, setToCurrency, setAmount} = exchangeSlice.actions
export default exchangeSlice.reducer