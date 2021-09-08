import { profileName, profileTitle } from "../utils/constants.js"

class Api {
  constructor({ baseUrl }) {
    this.baseUrl = baseUrl;
  }

  _checkRes(res) {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  getCards() {
    return fetch(`${this.baseUrl}/cards`, {
      headers: {
        authorization: "8e942d63-a4ca-4642-8de3-5514e3f09ba0",
        "Content-Type": "application/json"
      }
    })
      .then((res) => this._checkRes(res))

  }

  getProfileInfo() {
    return fetch(`${this.baseUrl}/users/me`, {
      method: "GET",
      headers: {
        authorization: "8e942d63-a4ca-4642-8de3-5514e3f09ba0",
        "Content-Type": "application/json"
      }
    })
      .then((res) => this._checkRes(res))
  }

  setProfileInfo(item) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: "8e942d63-a4ca-4642-8de3-5514e3f09ba0",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: item.name,
        about: item.title
      })
        .then((res) => this._checkRes(res))
    })
  }

  addNewCard(card) {
    return fetch(`${this.baseUrl}/cards`, {
      method: "POST",
      headers: {
        authorization: "8e942d63-a4ca-4642-8de3-5514e3f09ba0",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(card)
    })
      .then((res) => this._checkRes(res))

  }

  deleteCard(id) {
    return fetch(`${this.baseUrl}/cards/${id}`, {
      method: "DELETE",
      headers: {
        authorization: "8e942d63-a4ca-4642-8de3-5514e3f09ba0",
        "Content-Type": "application/json"
      }
    })
      .then((res) => this._checkRes(res))
  }



  addCardLike(id) {
    return fetch(`${this.baseUrl}/cards/likes/${id}`, {
      method: "PUT",
      headers: {
        authorization: "8e942d63-a4ca-4642-8de3-5514e3f09ba0",
        "Content-Type": "application/json"
      }
    })
      .then((res) => this._checkRes(res))
  }

  removeCardLike(id) {
    return fetch(`${this.baseUrl}/cards/likes/${id}`, {
      method: "DELETE",
      headers: {
        authorization: "8e942d63-a4ca-4642-8de3-5514e3f09ba0",
        "Content-Type": "application/json"
      }
    })
      .then((res) => this._checkRes(res))
  }


  changeCardStatus(id, liked) {
    if (liked) { return this.removeCardLike(id) }
    else return this.addCardLike(id)
  }

  updateProfilePicture() {ap

  }

}


export default Api