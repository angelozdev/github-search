interface IActions {
   type: string,
   payload?: any
}

export const reducer = (state = {}, { type }: IActions) => {
   switch (type) {
      default:
         return state;
   }
}