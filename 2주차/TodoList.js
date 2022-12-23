export default function TodoList({ $target, initialState, handleTodoState, handleDeleteState }) {
  if (!new.target) {
    throw new Error('new 없다!!');
  }

  this.$element = document.createElement('ul');
  $target.appendChild(this.$element);

  this.state = initialState;



  this.render = () => {
    this.$element.innerHTML = this.state
      .map(
        ({ isCompleted, text }, index) =>
          `<li data-index="${index}">
           ${isCompleted ? '[완료]': ''}
           ${text} 
            <button>🗑️</button>
          </li>`
      )
      .join('');
  };

  this.$element.addEventListener('click', (e) => {
    const $li = e.target.closest('li');

    if (!$li) {
      return;
    }

    const index = $li.dataset.index;
    if (e.target.tagName === 'LI') {
      handleTodoState(index);
    } else if (e.target.tagName === 'BUTTON') {
      handleDeleteState(index)
    }
  });

  this.setState = function (nextState) {
    this.state = nextState;
    this.render();
  };

  this.render();
}
