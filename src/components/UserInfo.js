class UserInfo {
  constructor({ nameSelector, titleSelector, id, avatar }) {
    this._nameSelector = nameSelector;
    this._titleSelector = titleSelector;
    this._id = id;
    this._avatar = avatar;
    
  }

  getUserInfo() {
    return {
      name: this._nameSelector.textContent,
      title: this._titleSelector.textContent,
      id: this._id,
      avatar: this._avatar
    };
  }

  setUserInfo({name, title, id, avatar}) {
    this.setUserText({name, title})
    this.setUserAvatar({avatar})
    this._id = id
  };

  setUserText({name, title,}) {
    this._nameSelector.textContent = name;
    this._titleSelector.textContent = title;
  };

  setUserAvatar({avatar}){
    this._avatar.src = avatar
  };
}

export default UserInfo;

//getUserInfo(). Input fields should = {name, title}