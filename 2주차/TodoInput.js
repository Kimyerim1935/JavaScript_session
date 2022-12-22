export default function TodoInput ({$target, handleAddTodo}){
  this.$element = document.createElement('form');

  $target.appendChild(this.$element);

  this.render = () => {
    this.$element.innerHTML = `
      <input type="text" placeholder="할 일을 입력하세요!" />
      <button>추가하기</button>
    `;
  };

  this.render();

  this.$element.addEventListener('submit', (e) => {
    e.preventDefault();

    const $input = this.$element.querySelector('input');

    const { value } = $input;
    if (value.length > 0) {
      handleAddTodo(value);
      $input.value = '';
    }
  });
}