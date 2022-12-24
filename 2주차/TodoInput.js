export default function TodoInput ({$target, handleAddTodo}){
  this.$element = document.createElement('form');

  $target.appendChild(this.$element);

  this.render = () => {
    this.$element.innerHTML = `
      <input type="text" placeholder="할 일을 입력하세요!" />
      <button>추가하기</button>
      <button class="remove-all" style="margin-left: 50px">모두 삭제</button>
    `;
  };

  this.$element.addEventListener('submit', (e) => {
    e.preventDefault();

    const $input = this.$element.querySelector('input');

    const { value } = $input;
    if (value.length > 0) {
      handleAddTodo(value);
      $input.value = '';
    }
  });

  this.$element.addEventListener('click', (e) => {
    if (e.target.className === 'remove-all') {
      window.dispatchEvent(new Event('removeAll'));
    }
  });

  this.render();

}