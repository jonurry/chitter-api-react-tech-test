const CREATE_USER_URL = 'https://chitter-backend-api.herokuapp.com/users';
const GET_PEEPS_URL = 'https://chitter-backend-api.herokuapp.com/peeps';
const GET_SESSION_URL = 'https://chitter-backend-api.herokuapp.com/sessions';
let sessionKey = '';

export default class Api {
  async createUser(handle, password) {
    let data = { user: { handle: handle, password: password } };
    let response = await fetch(CREATE_USER_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(data)
    });
    return await response.json();
  }
  async getPeeps() {
    let response = await fetch(GET_PEEPS_URL);
    return await response.json();
  }
  async getSession(handle, password) {
    let data = { session: { handle: handle, password: password } };
    let response = await fetch(GET_SESSION_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(data)
    });
    let sessionData = await response.json();
    sessionKey = sessionData.session_key;
    return sessionData;
  }
}
