export default function TodoList({
                                   $target,
                                   initialState,
                                   onClick,
                                   onRemoveClick,
                                 }) {
  this.$element = document.createElement('ul');
  $target.appendChild(this.$element);

  this.state = initialState;

  this.render = function () {
    this.$element.innerHTML = this.state
      .map(
        ({ isCompleted, text }, index) =>
          `<li data-index="${index}">
           ${isCompleted ? `<s>${text}</s>`: `${text}`} 
            <button>🗑️</button>
          </li>`
      )
      .join('');

    /* 이벤트 위임을 사용하지 않은 경우
    this.$element.querySelectorAll('li').forEach(($li, index) => {
      $li.addEventListener('click', () => onClick(index));
      $li.querySelector('button').addEventListener('click', (e) => {
        e.stopPropagation();
        onRemoveClick(index);
      });
    });*/
  };

  // 이벤트 위임을 사용한 경우
  this.$element.addEventListener('click', (e) => {
    const $li = e.target.closest('li');

    if (!$li) {
      return;
    }

    const index = $li.dataset.index;

    if (e.target.tagName === 'LI') {
      onClick(index);
    } else if (e.target.tagName === 'BUTTON') {
      onRemoveClick(index);
    }
  });

  this.setState = function (nextState) {
    this.state = nextState;
    this.render();
  };

  this.render();
}