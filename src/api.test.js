import Api from './api.js';

describe('API', () => {
  describe('GET peeps', () => {
    it('should get the 50 most recent peeps', async () => {
      const api = new Api();
      const peeps = await api.get(
        'https://chitter-backend-api.herokuapp.com/peeps'
      );
      expect(peeps).toBeInstanceOf(Array);
    });
  });
});
