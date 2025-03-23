import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "./CyptoCoin";
import { googleNewsApi } from "./Blogredux";
import exchangeSlice from './ExchangeSclice'
import nftReducer from './NftSlice'

const store = configureStore({
    reducer:{
        [cryptoApi.reducerPath]:cryptoApi.reducer,
        [googleNewsApi.reducerPath]:googleNewsApi.reducer,
        exchange: exchangeSlice,
        nft: nftReducer
    },
    

    middleware: (getDefaultMiddleware)=>
        getDefaultMiddleware()
    .concat(cryptoApi.middleware)
    .concat(googleNewsApi.middleware)
    
})

export default store


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;