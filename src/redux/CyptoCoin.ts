


import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface CoinItem {
  id: string;
  name: string;
  iconUrl: string;
  symbol: string;
  price:number;
  marketCap: number;
  change:number;
  uuid:string;
  rank:number;
}

const cryptoApiHeaders = {
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  "x-rapidapi-key": "2260101f85msh06433a18877f6a4p1947e0jsnf49385fd0a24",
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

// Function to set headers
const createRequest = (url: string) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCoins: builder.query<{ data: { coins: CoinItem[] } }, void>({
      query: () => createRequest("/coins"),
    }),
    getCoinDetails: builder.query<{data:{coin: CoinItem}}, string>({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    })
  }),
});

export const { useGetCoinsQuery, useGetCoinDetailsQuery } = cryptoApi;
