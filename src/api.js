const USER_URL = 'https://chitter-backend-api.herokuapp.com/users';
const PEEPS_URL = 'https://chitter-backend-api.herokuapp.com/peeps';
const SESSION_URL = 'https://chitter-backend-api.herokuapp.com/sessions';
let sessionKey = '';
let userId = '';

export default class Api {
  async createUser(handle, password) {
    let data = { user: { handle: handle, password: password } };
    let response = await fetch(USER_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(data)
    });
    return await response.json();
  }
  async createPeep(body) {
    let data = { peep: { user_id: userId, body: body } };
    await this.getSession();
    let response = await fetch(PEEPS_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: `Token token=${sessionKey}`
      },
      body: JSON.stringify(data)
    });
    const peep = await response.json();
    return peep;
  }
  async deletePeep(id) {
    let response = await fetch(`${PEEPS_URL}/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Token token=${sessionKey}`
      }
    });
    return response;
  }
  async getPeeps() {
    let response = await fetch(PEEPS_URL);
    return await response.json();
  }
  async getSession(handle = 'boggle', password = 'pa$$word1!') {
    let data = { session: { handle: handle, password: password } };
    let response = await fetch(SESSION_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(data)
    });
    let sessionData = await response.json();
    sessionKey = sessionData.session_key;
    userId = sessionData.user_id;
    return sessionData;
  }
}
