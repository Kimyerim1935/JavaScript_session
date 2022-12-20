import TodoInput from './TodoInput.js';
import TodoList from './TodoList.js';
import TodoCount from './TodoCount.js';
import { setItem } from './localStorage.js';
import { STORAGE_KEY } from './constants.js';

export default function App({ $target, initialState }) {
  this.state = initialState;
  this.setState = (nextState) => {
    this.state = nextState;

    setItem(STORAGE_KEY, this.state);

    todoList.setState(this.state);
    todoCount.setState(this.state);
  };

  const todoInput = new TodoInput({
    $target,
    onAddTodo: (text) => {
      this.setState([
        ...this.state,
        {
          text,
          isCompleted: false,
        },
      ]);
    },
  });

  const todoList = new TodoList({
    $target,
    initialState: this.state,
    onClick: (index) => {
      // TodoList 컴포넌트 내에서 클릭했을 때 호출될 함수
      // 몇번째를 눌렀는지 알려줌
      const nextState = [...this.state];
      nextState[index].isCompleted = !nextState[index].isCompleted;

      this.setState(nextState);
    },
    onRemoveClick: (index) => {
      const nextState = [...this.state];
      nextState.splice(index, 1);

      this.setState(nextState);
    },
  });

  const todoCount = new TodoCount({
    $target,
    initialState: this.state,
  });

  window.addEventListener('removeAll', () => {
    this.setState([]);
  });
}