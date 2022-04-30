import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { stringify } from "query-string";
import { Launch } from "../types";

export const launchApi = createApi({
  reducerPath: "launchApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://lldev.thespacedevs.com/2.2.0/",
  }),
  endpoints: (builder) => ({
    getLaunches: builder.query<
      Launch[],
      { startDate: string; endDate: string }
    >({
      query: ({ startDate, endDate }) => {
        const query = {
          window_start__gte: startDate,
          window_start__lte: endDate,
          limit: 10000,
        };

        return `launch?${stringify(query)}`;
      },
      transformResponse: (response: { results: Launch[] }) => response.results,
    }),
  }),
});

export const { useGetLaunchesQuery } = launchApi;
