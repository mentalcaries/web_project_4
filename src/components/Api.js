import { profileName, profileTitle, } from "../utils/constants.js"

class Api {
  constructor({ baseUrl }) {
    this.baseUrl = baseUrl;
  }

  getInitialCards() {
    return fetch(`${this.baseUrl}/cards`, {
      headers: {
        authorization: "8e942d63-a4ca-4642-8de3-5514e3f09ba0",
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json()
        }
        return Promise.reject(`Error: ${res.status}`);
      })

  }

  getProfileInfo() {
    return fetch(`${this.baseUrl}/users/me`, {
      method: "GET",
      headers: {
        authorization: "8e942d63-a4ca-4642-8de3-5514e3f09ba0",
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then((result) => {
        profileName.textContent = result.name;
        profileTitle.textContent = result.about;
      })
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
    })
  }

  addNewCard() {
    return fetch(`${this.baseUrl}/cards`, {
      method: "POST",
      headers: {
        authorization: "8e942d63-a4ca-4642-8de3-5514e3f09ba0",
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json()
        }
        return Promise.reject(`Error: ${res.status}`);
      })

  }
  }

  deleteCard() {

  }

  cardToggleLike() {

  }

  updateProfilePicture() {

  }

}

// const api = new Api({
//   baseUrl: "https://around.nomoreparties.co/v1/group-10",
//   headers: {
//     authorization: "8e942d63-a4ca-4642-8de3-5514e3f09ba0",
//     "Content-Type": "application/json"
//   }
// });

export default Api

// function getUserInfo() {
//   return fetch("https://around.nomoreparties.co/v1/group-10/users/me", {
//     method: "GET",
//     headers: {
//       authorization: "8e942d63-a4ca-4642-8de3-5514e3f09ba0",
//       "Content-Type": "application/json"
//     }
//   })
//     .then(res => res.json())
//     .then((result) => {
//     console.log(result.name);
//     console.log(result.about);
//     })
// }