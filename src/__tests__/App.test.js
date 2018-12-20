import React from 'react';
import { waitForElement, render } from 'react-testing-library';
import App from '../App';
import Api from '../api';

jest.mock('../api');

describe('<App>', () => {
  it('renders without crashing', () => {
    render(<App api={new Api()} />);
  });

  test('App Matches Snapshot', async () => {
    const { container, getByText } = await render(<App api={new Api()} />);
    await waitForElement(() => getByText('my first peep :)'));
    expect(container.firstChild).toMatchSnapshot();
  });
});
