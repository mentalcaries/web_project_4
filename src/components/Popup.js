class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popupElement.classList.add("popup_opened");
    document.addEventListener("keyup", this._handleEscClose);

  }

  close() {
    this._popupElement.classList.remove("popup_opened");
    document.removeEventListener("keyup", this._handleEscClose);
  }

  _handleEscClose(evt) {

    if (evt.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    //Close button
    const closeButton = this._popupElement.querySelector(".popup__close-btn")
    closeButton.addEventListener("click", (evt) => {
      this.close(evt.target);
    })


    //Overlay
    this._popupElement.addEventListener("click", (evt) => {
      if (evt.target.closest(".popup__container")) return
      this.close();
    })
  }
}

export default Popup;