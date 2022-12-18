import TodoList from './TodoList';

 const data1 = [
  {
    text: 'JS 공부하기',
    isCompleted: false,
  },
  {
    text: 'JS 복습하기',
    isCompleted: false,
  },
  {
    text: 'TS 공부하기',
    isCompleted: true,
  },
  {
    text: 'TS 복습하기',
    isCompleted: true,
  },
  ];

  const data2 = [
  {
    text: 'JS 공부하기',
    isCompleted: true,
  },
  {
    text: 'JS 복습하기',
    isCompleted: true,
  },
  ];

  // TodoList 컴포넌트 정의
  class TodoListClass {
  $element = null;
  state = null;

  constructor({ $target, initialState }) {
  this.$element = document.createElement('ul');
  this.state = initialState;

  this.render();

  $target.appendChild(this.$element);
}

  render() {
  this.$element.innerHTML = this.state
  .map(
  ({ isCompleted, text }) =>
  `<li>${isCompleted ? '[완료] ' : ''}${text}</li>`
  )
  .join('');
}
}

  const $target = document.querySelector('main');

  const todoList1 = new TodoListClass({
  $target,
  initialState: data1,
});

  const todoList2 = new TodoList({
  $target,
  initialState: data2,
});

  const todoList3 = new TodoList({
  $target,
  initialState: [],
});

  setTimeout(() => {
  todoList3.setState([
    {
      text: '코딩하기',
    },
  ]);
}, 5000);