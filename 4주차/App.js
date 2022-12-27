export default function App ({$target, initialState}){
  this.state = initialState;

  this.$element = document.createElement('div');
  $target.appendChild(this.$element);

  this.render = () => {
    console.log('render')
  }

  this.render();
}