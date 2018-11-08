import Api from '../api.js';

describe('API', () => {
  let api;
  beforeEach(() => {
    api = new Api();
  });
  describe('GET peeps', () => {
    it('should get the 50 most recent peeps', async () => {
      const peeps = await api.getPeeps();
      expect(peeps).toBeInstanceOf(Array);
    });
  });
  describe('Create User', () => {
    it('should create a new user', async () => {
      await api.createUser('Boggle', 'pa$$word1!');
      const user = await api.createUser('Boggle', 'pa$$word1!');
      expect(user).toEqual({ handle: ['has already been taken'] });
    });
  });
});
