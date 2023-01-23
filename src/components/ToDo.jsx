import JSX, { CustomElement, Properties, BaseComponent } from "@nyaf/lib";
import { ProvideStore } from "@nyaf/store";
import { ADD_TODO, ALL_TODOS } from "../businesslogic/actions";
import todoStore from '../businesslogic/store';
import * as Logo from "../assets/logo.png";
import "./ToDo.css";

@CustomElement('app-todo')
@Properties({ list: [] })
@ProvideStore(todoStore)
class ToDo extends BaseComponent {

  constructor() {
    super();
    // wait for store changes
    this.store.subscribe('toDos', (state) => {
      this.data.list = state.toDos;
    });
    // inital call
    this.store.dispatch(ALL_TODOS);
  }

  toDo = 'x';

  createNewToDoItem() {
    //validate todo
    if (!this.toDo) {
      alert("Please enter a todo!");
      return;
    }
    this.store.dispatch(ADD_TODO, this.toDo);
  }

  handleKeyPress(e) {
    if (e.key === "Enter") {
      this.createNewToDoItem();
    }
  }

  handleInput(e) {
    this.toDo = e.target.value;
  }

  async render() {
    return (
      <div class="ToDo">
        <img classN="Logo" src={Logo.default} alt="@nyaf logo" />
        <h1 class="ToDo-Header">@nyaf To Do</h1>
        <div class="ToDo-Container">
          <div class="ToDo-Content">
            {this.data.list.map((item) => {
              return <app-todo-item item={item} />;
            })}
          </div>

          <div class="ToDoInput">
            <input type="text" placeholder="Enter a todo..." value={this.toDo} n-on-input={(e) => this.handleInput(e)} n-on-keypress={(e) => this.handleKeyPress(e)} />
            <button class="ToDo-Add" n-on-click={(e) => this.createNewToDoItem()}>
              +
          </button>
          </div>
        </div>
      </div>
    );
  }

}

export default ToDo;
