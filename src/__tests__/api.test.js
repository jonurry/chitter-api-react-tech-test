import Api from '../api.js';

const HANDLE = 'boggle';
const PASSWORD = 'pa$$word1!';

describe('API', () => {
  let api;
  beforeAll(async () => {
    api = new Api();
    await api.getSession(HANDLE, PASSWORD);
  });
  describe('GET peeps', () => {
    it('should get the 50 most recent peeps', async () => {
      const peeps = await api.getPeeps();
      expect(peeps).toBeInstanceOf(Array);
    });
  });
  describe('POST Create User', () => {
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
  describe('POST Create / DELETE Peep', () => {
    it('should create and then delete a new peep', async () => {
      const body = 'peep till you poop';
      const peep = await api.createPeep(body);
      // expect(Object.keys(peep)).toEqual(
      //   expect.arrayContaining([
      //     'id',
      //     'body',
      //     'created_at',
      //     'updated_at',
      //     'user',
      //     'likes'
      //   ])
      // );
      // expect(peep.body).toEqual(body);
      const deleteResponse = await api.deletePeep(peep.id);
      expect(deleteResponse.status).toEqual(204);
    });
  });
});
