// api url
var url = "https://jsonplaceholder.typicode.com/users/1";

// dom
var username = document.querySelector("#username");
var email = document.querySelector("#email");
var address = document.querySelector("#address");

// user data
var user = {};

/**
 * @tyepdef {object} Address
 * @property {string} street
 * @property {string} city
 */

/**
 * @typedef {object} User
 * @property {string} name
 * @property {string} email
 * @property {Address} address
 */

/**
 *
 * @returns {Promise<User>}
 */
function fetchUser() {
  return axios.get(url);
}

function startApp() {
  fetchUser()
    .then(function (response) {
      console.log(response);
      user = response.data;
      console.log(user);

      // TODO: 이름, 이메일, 주소 표시하기
      username.innerHTML = user[0].name;
      email.innerHTML = user[0].email;
      address.innerHTML = user[0].address;
    })
    .catch(function (error) {
      console.log(error);
    });
}

startApp();
