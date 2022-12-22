import TodoInput from './TodoInput.js';
import TodoList from './TodoList.js';
import TodoCount from "./TodoCount.js";

export default function App ({$target, initialState}) {
  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;

    todoList.setState(this.state)
    todoCount.setState(this.state)
  }


  const todoInput = new TodoInput({
    $target,
    initialState: this.state,
    handleAddTodo: (text) => {
      this.setState([
        ...this.state,
        {
          text,
          isCompleted: false
        }
      ])
    }
  })

  const todoList = new TodoList({
    $target,
    initialState: this.state,
  });

  const todoCount = new TodoCount({
    $target,
    initialState: this.state
  })
}
