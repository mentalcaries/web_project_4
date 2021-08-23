import Popup from "./Popup.js";

class PopupWithImage extends Popup{
  constructor(popupSelector){
    super(popupSelector);
  }

  open({link, name}){
    //get name and link from form
    this._popupElement.querySelector(".popup__caption").textContent = name;
    const image = this._popupElement.querySelector(".popup__image");
    image.src = link;
    image.alt = `Picture of ${name}`;
    //call open function from parent class with super
    super.open();
  }
}

export default PopupWithImage;