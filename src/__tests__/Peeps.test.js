import React from 'react';
import ReactDOM from 'react-dom';
import Peeps from '../Peeps';
import Api from '../api.js';

jest.mock('../api');

it('renders without crashing', async () => {
  const api = new Api();
  const peeps = await api.getPeeps();
  const div = document.createElement('div');
  ReactDOM.render(
    <Peeps
      api={api}
      peeps={peeps}
      currentUser={{
        session_key: '_2a_10_VhcqQmvbjz_4EJHs1NXi0_',
        user_id: 1
      }}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
