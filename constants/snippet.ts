export const useRequest = `
import useSWR, { SWRConfiguration, SWRResponse } from "swr";
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsConnected } from "react-native-offline";
import { useCachedData } from "../hooks/useCache";

export type GetRequest = AxiosRequestConfig | null;

interface Return<Data, Error>
  extends Pick<
    SWRResponse<AxiosResponse<Data>, AxiosError<Error>>,
    "isValidating" | "error" | "mutate"
  > {
  data: Data | undefined;
  response: AxiosResponse<Data> | undefined;
}

export interface Config<Data = unknown, Error = unknown>
  extends Omit<
    SWRConfiguration<AxiosResponse<Data>, AxiosError<Error>>,
    "fallbackData"
  > {
  fallbackData?: Data;
}

export const getCacheKey = (request: GetRequest) => {
  // Generate a unique cache key based on the request
  return JSON.stringify(request);
};

export default function useRequest<Data = unknown, Error = unknown>(
  request: GetRequest,
  { fallbackData, ...config }: Config<Data, Error> = {}
): Return<Data, Error> {
  const cacheKey = getCacheKey(request);
  const isConnected = useIsConnected();
  const [cachedData, isFetching] = useCachedData<Data>(request);

  const {
    data: response,
    error,
    isValidating,
    mutate
  } = useSWR<AxiosResponse<Data>, AxiosError<Error>>(
    cacheKey,
    /**
     * NOTE: Typescript thinks request can be null here, but the fetcher
     * function is actually only called by useSWR when it isn't.
     */
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    () => axios.request<Data>(request!),
    {
      ...config,
      fallbackData:
        fallbackData &&
        ({
          status: 200,
          statusText: "InitialData",
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          config: request!,
          headers: {},
          data: fallbackData
        } as AxiosResponse<Data>)
    }
  );

  // Update AsyncStorage when the response is successful
  if (response?.data && !isFetching) {
    AsyncStorage.setItem(cacheKey, JSON.stringify(response.data));
  }

  return {
    data: !isConnected ? cachedData : response && response.data,
    response,
    error,
    isValidating,
    mutate
  };
}
`;

export const explanation = `
The code defines a custom React hook named useRequest, designed to simplify data fetching in React Native applications.
It leverages the SWR library for caching and revalidating data fetched from an API using Axios. 
The hook handles offline scenarios using AsyncStorage and provides TypeScript typings for enhanced code 
readability and type safety. It encapsulates logic for generating cache keys, checking network connectivity, 
and updating AsyncStorage with fetched data. Overall, the useRequest hook streamlines data fetching, 
caching, and offline support in React Native projects.
`;
