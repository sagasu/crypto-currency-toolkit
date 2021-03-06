import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import env from "react-dotenv";

const token = env.CRYPTO_NEWS_API_TOKEN

const cryptoNewsHeaders = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': token
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const createRequest = (url) => ({url, headers: cryptoNewsHeaders});

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({newsCategory ,count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    })
});

//useGetCryptoNewsQuery needs to be same as getCryptoNews above - it is a convention
export const {
    useGetCryptoNewsQuery,
} = cryptoNewsApi;