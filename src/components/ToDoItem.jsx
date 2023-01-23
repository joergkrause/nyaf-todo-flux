import JSX, { BaseComponent, Properties, CustomElement } from "@nyaf/lib";
import { ProvideStore } from "@nyaf/store";
import todoStore from "../businesslogic/store";
import { REMOVE_TODO } from '../businesslogic/actions';

import "./ToDoItem.css";

@CustomElement('app-todo-item')
@Properties({ item: { text: '', id: 0 } })
@ProvideStore(todoStore)
class ToDoItem extends BaseComponent {

  constructor() {
    super();
  }

  async render() {
    return (
      <div class="ToDoItem">
        <p class="ToDoItem-Text">{this.data.item.text}</p>
        <button class="ToDoItem-Delete" n-on-click={() => this.deleteItem()}>
          -
        </button>
      </div>
    );
  }

  deleteItem() {
    const id = this.data.item.id;
    this.store.dispatch(REMOVE_TODO, id);
  }

}

export default ToDoItem;
