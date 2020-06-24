import { useEffect, useState } from 'react';
import Axios from 'axios';
import '@babel/polyfill';

export const useFetchData = (query: string, initialState = {}): [any, { loading?: boolean, error?: Error }] => {
   const [data, setData] = useState(initialState);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null)

   useEffect(() => {
      const API: string = `https://api.github.com/users/${query}`;
      setLoading(true);
      (async () => {
         try {
            const response = await Axios.get(API);
            setLoading(false);
            setData(response.data);
         } catch (error) {
            setError(error)
         }
      })()
   }, [query])

   return [data, { loading, error }];
}