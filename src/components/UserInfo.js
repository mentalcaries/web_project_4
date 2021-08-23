class UserInfo {
  constructor({ nameSelector, titleSelector }) {
    this._nameSelector = nameSelector;
    this._titleSelector = titleSelector;
  }

  getUserInfo() {
    return {
      name: this._nameSelector.textContent,
      title: this._titleSelector.textContent
    };
  }

  setUserInfo({nameSelector, titleSelector}) {
    this._nameSelector.textContent = nameSelector;
    this._titleSelector.textContent = titleSelector;
  };
}

export default UserInfo;

//getUserInfo(). Input fields should = {name, title}