export default function TodoCount ({$target, initialState}) {
  this.state = initialState;

  this.$element = document.createElement('div');
  $target.appendChild(this.$element);

  this.render = () => {
    const completedCount = this.state.filter((todo) => todo.isCompleted).length;

    this.$element.innerHTML = `총 할일의 갯수: <strong>${this.state.length}</strong> / 완료한 할일의 갯수: <strong>${completedCount}</strong>`
  }

  this.render();

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  }
}