import React from 'react';
import { render } from 'react-testing-library';
import Peep from '../peep';

test('Peep', () => {
  const props = {
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

  const { getByTestId } = render(<Peep {...props} />);
  const peepDiv = getByTestId('peep-text');
  const peepNameDate = getByTestId('peep-name-date');
  const likeButton = getByTestId('like-button');
  expect(peepDiv).toHaveTextContent('my first peep :)');
  expect(peepNameDate).toHaveTextContent('kay on 23-06-2018 13:21');
  expect(likeButton).toHaveTextContent('Likes: 1');
});
