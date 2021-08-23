
class Section {
  constructor({ items, renderer }, cardContainer) {

    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(cardContainer);
  }

  renderItems() {   
    this._items.forEach(item => {
      this._renderer(item);
    })
  }

  addItem(card) {
    //takes DOM element and adds it to the container
    this._container.prepend(card)
  }
}

export default Section;
