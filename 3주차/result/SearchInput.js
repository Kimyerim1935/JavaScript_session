export default function SearchInput({$target,initialState, onSearch}) {
  this.state = initialState;
  this.$element = document.createElement('input');

  $target.appendChild(this.$element);

  this.render = () => {
    this.$element.value = this.state;
  }

  this.setState = (nextState) => {
    this.state = nextState;

    this.render();
  }

  this.$element.addEventListener('keyup', (e) => onSearch(e.target.value));

  this.render();
}