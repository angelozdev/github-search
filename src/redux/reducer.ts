import { GET_USER, SET_QUERY } from './actions';
import { IInitialState } from './store'

interface IActions {
   type: string,
   payload?: any
}

export const reducer = (state: IInitialState, { type, payload }: IActions) => {
   switch (type) {
      case GET_USER:
         return {
            ...state,
            user: payload,
         }
      case SET_QUERY:
         return {
            ...state,
            query: payload
         }
      default:
         return state;
   }
}