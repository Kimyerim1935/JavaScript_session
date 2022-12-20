export default function TodoCount ({$target, initialState}) {
  this.state = initialState;

  this.$element = document.createElement('div');
  $target.appendChild(this.$element);

  this.render = () => {
    const complementCount = this.state.filter((todo) => todo.isCompleted).length;

    this.$element.innerHTML = `총 할 일 갯수: <strong>${this.state.length}</strong> / 완료한 갯수: <strong>${complementCount}</strong>`
  }

  this.render();

  this.$element.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
      window.dispatchEvent(new Event('removeAll'));
    }
  });
  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };
}