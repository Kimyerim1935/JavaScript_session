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
           ${isCompleted ? '[ěëŁ]': ''}
           ${text} 
            <button>đď¸</button>
          </li>`
      )
      .join('');

    /* ě´ë˛¤í¸ ěěě ěŹěŠíě§ ěě ę˛˝ě°
    this.$element.querySelectorAll('li').forEach(($li, index) => {
      $li.addEventListener('click', () => onClick(index));
      $li.querySelector('button').addEventListener('click', (e) => {
        e.stopPropagation();
        onRemoveClick(index);
      });
    });*/
  };

  // ě´ë˛¤í¸ ěěě ěŹěŠí ę˛˝ě°
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