export default function SearchHistory ({$target, initialState}) {
  this.state = initialState
  this.$element = document.createElement('ul');
  this.$element.style =
    'padding: 0; margin: 10px 0; list-style: none; display: flex;';

  $target.appendChild(this.$element);

  this.render = () => {
    const htmlString = this.state
      .map(
        (data) =>
          `<li style="padding: 8px; border: 1px solid #ccc; border-radius: 8px;">${data}</li>`
      )
      .join('');

    this.$element.innerHTML = htmlString;
  }

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  }

  this.render();
}