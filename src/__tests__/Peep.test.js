import React from 'react';
import { shallow } from 'enzyme';
import Peep from '../peep';

test('Peep', () => {
  const peep = {
    peep: {
      id: 3,
      body: 'my first peep :)',
      created_at: '2018-06-23T13:21:23.317',
      updated_at: '2018-06-23T13:21:23.317',
      user: {
        id: 1,
        handle: 'kay'
      },
      likes: [
        {
          user: {
            id: 1,
            handle: 'kay'
          }
        }
      ]
    }
  };

  const peepUI = shallow(<Peep {...peep} />);
  expect(peepUI.find('.peep-text').text()).toEqual('my first peep :)');
  expect(peepUI.find('.peep-name-date').text()).toEqual(
    'kay on 23-06-2018 13:21'
  );
  expect(peepUI.find('button').text()).toEqual('Likes: 1');
});
