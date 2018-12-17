import DateFormatter from '../dateFormatter.js';

describe('DateFormatter', () => {
  test('should format a date', () => {
    const dateFormatter = new DateFormatter();
    const formattedDate = dateFormatter.formatDate(
      new Date('2018-06-23T13:21:23.317')
    );
    expect(formattedDate).toEqual('23-06-2018 13:21');
  });
});
