import { useEffect, useState } from 'react';
import Axios from 'axios';

export const useFetchData = (query: string, initialState = {}): [any, { loading?: boolean, error?: Error }] => {
   const [data, setData] = useState(initialState);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null)

   useEffect(() => {
      const API: string = `https://api.github.com/users/${query}`;
      setLoading(true);

      Axios.get(API)
      .then((response) => setData(response.data))
      .then(() => setLoading(false))
      .catch((err: Error) => setError(err))

   }, [query])

   return [data, { loading, error }];
}