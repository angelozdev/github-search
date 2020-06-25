export const TOGGLE_THEME: string = 'TOGGLE_THEME';

interface IState {
   isLight: boolean
}

interface IAction {
   type: string,
   payload?: any
}

export const reducer = (state: IState, { type }: IAction) => {
   switch (type) {
      case TOGGLE_THEME:
         return {
            ...state,
            isLight: !state.isLight
         }
      default:
         return state
   }
}