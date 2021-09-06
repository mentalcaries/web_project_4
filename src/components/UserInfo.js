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
    this._nameSelector.textContent = name;
    this._titleSelector.textContent = title;
    this._id = id
    this._avatar = avatar
  };
}

export default UserInfo;

//getUserInfo(). Input fields should = {name, title}