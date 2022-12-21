export default function TodoList({ $target, initialState }) {
  if (!new.target) {
    throw new Error('new 없다!!');
  }

  this.$element = document.createElement('ul');
  $target.appendChild(this.$element);

  this.state = initialState;

  this.validate = () => {
    if (!this.state || !Array.isArray(this.state)) {
      throw new Error('state가 없다!!');
    }
  };

  this.validate();
  this.setState = (nextState) => {
    this.state = nextState;
    this.validate();
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
