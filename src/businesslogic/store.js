import { Store } from "@nyaf/store";
import actions from './actions';
import reducer from './reducer';

export const todoState = {
  toDos: []
};

const todoStore = new Store({
  actions,
  reducer,
  state: todoState
});

export default todoStore;
