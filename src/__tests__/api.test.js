import Api from '../api.js';

const HANDLE = 'boggle';
const PASSWORD = 'pa$$word1!';

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
      await api.createUser(HANDLE, PASSWORD);
      const user = await api.createUser(HANDLE, PASSWORD);
      expect(user).toEqual({ handle: ['has already been taken'] });
    });
  });
  describe('GET Session', () => {
    it('should create a new session for the user', async () => {
      const session = await api.getSession(HANDLE, PASSWORD);
      expect(Object.keys(session)).toEqual(
        expect.arrayContaining(['session_key', 'user_id'])
      );
    });
  });
});
