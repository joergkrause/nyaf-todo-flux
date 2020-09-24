import { ADD_TODO, REMOVE_TODO, ALL_TODOS } from "./actions";

function generateId(toDos) {
  if (toDos && toDos.length > 0) {
    return Math.max(...toDos.map((t) => t.id)) + 1;
  } else {
    return 1;
  }
}

const todoReducers = {
  [ADD_TODO]: (state, payload) => {
    const newId = generateId(state.toDos);
    const newToDo = { id: newId, text: payload };
    const toDos = [...state.toDos, newToDo];
    return { toDos };
  },
  [REMOVE_TODO]: (state, payload) => {
    const toDos = state.toDos.filter((item) => item.id !== payload);
    return { toDos };
  },
  [ALL_TODOS]: (state, payload) => {
    const toDos = state.toDos;
    return { toDos };
  }
}

export default todoReducers;
