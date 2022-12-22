export default function TodoList({ $target, initialState }) {
  if (!new.target) {
    throw new Error('new 없다!!');
  }

  this.$element = document.createElement('ul');
  $target.appendChild(this.$element);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    this.$element.innerHTML = this.state
      .map(
        ({ isCompleted, text }) =>
          `<li>${isCompleted ? '[완료] ' : ''}${text}</li>`
      )
      .join('');
  };

  this.render();
}
