import React from 'react';
import { fireEvent, render, waitForElement } from 'react-testing-library';
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

  it('Should delete a Peep', async () => {
    const api = new Api();
    api.deletePeep = jest.fn();
    let peep = (await api.getPeeps())[0];
    const { getByText } = await render(<App api={api} />);
    await waitForElement(() => getByText(peep.body));
    // should be the first peep's delete button
    const deleteButton = getByText(/delete/i);
    await fireEvent.click(deleteButton);
    expect(api.deletePeep).toHaveBeenCalledWith(peep.id);
  });
});
