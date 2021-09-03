
class Section {
  constructor({ renderer }, cardContainer) {

    this._renderer = renderer;
    this._container = document.querySelector(cardContainer);
     }

  renderItems(items) {   
    items.forEach(item => {
      this._renderer(item);
    })
  }

  addItem(card) {
    //takes DOM element and adds it to the container
    this._container.prepend(card)
  }
}

export default Section;
