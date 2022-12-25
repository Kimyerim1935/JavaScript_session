export default function SearchResult({$target, initialState, onMusicianClick}) {
  this.state = initialState;

  this.$element = document.createElement('div');

  $target.appendChild(this.$element);

  this.render = () => {
    const htmlString = `${this?.state
      .map(
        (d) =>
          `<div style="display: inline-block; width: 33%">
            <img src="${d.poster}" style="object-fit: cover; width: 100%;">
             ${d.musicians
            .map(
               (musician) =>
                 `<p class="musician" style="display: inline-block; padding: 4px; border: 1px solid #ccc; margin-right: 4px;">${musician}</p>`
             )
            .join('')}
          </div>`
      )
      .join('')}`;

    this.$element.innerHTML = htmlString;
  };

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  }

  this.$element.addEventListener('click', (e) => {
    if (e.target.className === 'musician') {
      onMusicianClick(e.target.textContent);
    }
  });

  this.render();

}