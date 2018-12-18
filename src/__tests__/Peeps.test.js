import React from 'react';
import { render } from 'react-testing-library';
import Peeps from '../Peeps';
import Api from '../api.js';

jest.mock('../api');
const api = new Api();
let peeps;
let currentUser;

beforeAll(async () => {
  peeps = await api.getPeeps();
  currentUser = await api.getSession();
});
describe('<Peeps>', () => {
  it('Renders without crashing', () => {
    render(<Peeps peeps={peeps} currentUser={currentUser} />);
  });

  test('Matches snapshot', () => {
    const { container } = render(
      <Peeps peeps={peeps} currentUser={currentUser} />
    );
    expect(container).toMatchSnapshot();
  });
});
