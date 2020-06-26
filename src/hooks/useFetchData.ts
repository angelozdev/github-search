import { useEffect, useState } from 'react';
import Axios from 'axios';

/* Redux */
import { useDispatch } from 'react-redux';
import { GET_USER } from '../redux/actions'

export const useFetchData = (query: string): { loading?: boolean, error?: Error } => {
   const [loading, setLoading] = useState(true);
   const dispatch = useDispatch()

   useEffect(() => {
      const API: string = `https://api.github.com/users/${query}`;
      setLoading(true);

      Axios.get(API)
      .then((response) => dispatch({type: GET_USER, payload: response.data}))
      .then(() => setLoading(false))
      .catch(() => {
         Axios.get("https://api.github.com/users/reactjs")
         .then((response) => dispatch({type: GET_USER, payload: response.data}))
         .then(() => setLoading(false))
      })

   }, [query])

   return { loading };
}