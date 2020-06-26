export const GET_USER: string = 'GET_USER';
export const SET_QUERY: string = 'SET_QUERY';

export const getUser = ({ user = {}}) => ({
   type: GET_USER,
   payload: user
})

export const setQuery = ({ search }: {search: string}) => ({
   type: SET_QUERY,
   payload: search
})