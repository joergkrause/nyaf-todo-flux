export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const ALL_TODOS = 'ALL_TODOS';

const actions = {
  [ADD_TODO]: () => true,
  [REMOVE_TODO]: () => true,
  [ALL_TODOS]: () => [
    { id: 1, text: "clean the house" },
    { id: 2, text: "buy milk" }
  ],
};

export default actions;
