import { useEffect, useState } from 'react';
import Axios from 'axios';

export const useFetchData = (query: string, initialState = {}): [any, { loading?: boolean, error?: Error }] => {
   const [data, setData] = useState(initialState);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null)

   useEffect(() => {
      const API: string = `https://api.github.com/users/${query}`
      setLoading(true)

      try {
         Axios.get(API)
         .then(({data}) => setData(data))
         .then(() => setLoading(false))
      } catch (error) {
         setError(error)
      }
   }, [query])

   return [data, { loading, error }];
}