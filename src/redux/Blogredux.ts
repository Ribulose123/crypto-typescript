import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface blogItem {
    title:string;
    snippet:string,
    images: string[]

}

interface ApiResponse{
    ariticle:blogItem[]
}


const googleNewsApiHeaders = {
  'X-RapidAPI-Host': 'google-news13.p.rapidapi.com',
  'X-RapidAPI-Key': '2260101f85msh06433a18877f6a4p1947e0jsnf49385fd0a24', // Replace if needed
};

const baseUrl = 'https://google-news13.p.rapidapi.com';

const createRequest = (url: string) => ({
  url,
  headers: googleNewsApiHeaders,
});

export const googleNewsApi = createApi({
  reducerPath: 'googleNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getBusinessNews: builder.query<ApiResponse,void>({
      query: () => createRequest('/business?lr=en-US'),  // Fetch Business news
    }),
  }),
});

export const { useGetBusinessNewsQuery } = googleNewsApi;
