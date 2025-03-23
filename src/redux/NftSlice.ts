import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface NFT {
  id: string;
  name: string;
  symbol: string;
  asset_platform_id: string;
}

interface NFTState {
  nfts: NFT[];
  loading: boolean;
  error: string | null;
}

// Initial State
const initialState: NFTState = {
  nfts: [],
  loading: false,
  error: null,
};

// Fetch NFTs from CoinGecko API
export const fetchNFTs = createAsyncThunk("nfts/fetchNFTs", async () => {
  const response = await axios.get("https://api.coingecko.com/api/v3/nfts/list");
  return response.data.slice(0, 10); // Fetch only 10 NFTs
});

const nftSlice = createSlice({
  name: "nft",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNFTs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNFTs.fulfilled, (state, action) => {
        state.loading = false;
        state.nfts = action.payload;
      })
      .addCase(fetchNFTs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch NFTs";
      });
  },
});

export default nftSlice.reducer;
