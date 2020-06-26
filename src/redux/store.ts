import { createStore } from 'redux';
import { reducer } from './reducer';

export interface IInitialState {
   user: any,
   query: string
}

const initialState: IInitialState = {
   user: {},
   query: 'reactjs'
}

export const store = createStore(reducer, initialState)