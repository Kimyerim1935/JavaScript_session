import TodoList from './TodoList.js';

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

const $target = document.querySelector('main');

const todoList = new TodoList({
  $target,
  initialState: data1,
});

setTimeout(() => {
  todoList.setState([
    {
      text: '코딩하기',
    },
  ]);
}, 5000);