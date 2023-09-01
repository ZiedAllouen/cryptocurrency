import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders ={
    'X-RapidAPI-Key': 'ecfb8607d7msh561792eb12a4e3ap12bd7bjsnff5c15aff577',
   'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url:string)=>({url,headers:cryptoApiHeaders})
export const cryptoApi=createApi({
    reducerPath:'cryptoApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints: (builder)=> ({
        getCryptos:builder.query({
            query:()=> createRequest('./exchanges'),
        })
    })}
)