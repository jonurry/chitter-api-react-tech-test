import React from 'react';
import ReactDOM from 'react-dom';
import Peeps from '../Peeps';
import Api from '../api.js';
jest.mock('../api');

it('renders without crashing', () => {
  const api = new Api();
  const div = document.createElement('div');
  ReactDOM.render(<Peeps api={api} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
