import Popup from "./Popup.js";

class PopupWithImage extends Popup{
  constructor(popupSelector){
    super(popupSelector);
  }

  open({link, name}){
    this._popupElement.querySelector(".popup__caption").textContent = name;
    const image = this._popupElement.querySelector(".popup__image");
    image.src = link;
    image.alt = `Picture of ${name}`;
    super.open();
  }
}

export default PopupWithImage;