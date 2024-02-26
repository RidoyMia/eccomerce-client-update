"use client"
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const UserApi = createApi({
    reducerPath : 'UserApi', 
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:700/api/v1/user"}),
    tagTypes: ['user'],
    endpoints: (builder) => ({
        signInUser: builder.mutation({
            query: (data) => ({
                url: '/create-user',
                method: 'POST',
                body: data
            })
        }),
        getSingleUser : builder.query({
            query : (email)=> `/${email}`
        }),
        LoginUser : builder.mutation({
            query : (email) => ({
                url : `/login/${email}`,
                method : 'POST',
                body : {}
            })
        })
    })
});

// Destructure signInUser and export it separately
export const { useSignInUserMutation ,useGetSingleUserQuery,useLoginUserMutation} = UserApi;
