export default class Api {
  async get(url) {
    let response = await fetch(url);
    return await response.json();
  }
}
