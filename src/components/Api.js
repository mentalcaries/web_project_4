class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkRes(res) {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  getCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers})
      .then((res) => this._checkRes(res))

  }

  getProfileInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: this._headers
    })
      .then((res) => this._checkRes(res))
  }

  setProfileInfo(item) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: item.name,
        about: item.title
      })
    })
    .then((res) => this._checkRes(res))
  }

  addNewCard(card) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(card)
    })
      .then((res) => this._checkRes(res))

  }

  deleteCard(id) {
    return fetch(`${this._baseUrl}/cards/${id}`, {
      method: "DELETE",
      headers: this._headers,
    })
      .then((res) => this._checkRes(res))
  }



  addCardLike(id) {
    return fetch(`${this._baseUrl}/cards/likes/${id}`, {
      method: "PUT",
      headers: this._headers
    })
      .then((res) => this._checkRes(res))
  }

  removeCardLike(id) {
    return fetch(`${this._baseUrl}/cards/likes/${id}`, {
      method: "DELETE",
      headers: this._headers
    })
      .then((res) => this._checkRes(res))
  }


  changeCardStatus(id, liked) {
    if (liked) { return this.removeCardLike(id) }
    else return this.addCardLike(id)
  }

  updateProfilePicture(avatar) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({avatar: avatar})
    })
      .then((res) => this._checkRes(res))

  }
  

}


export default Api