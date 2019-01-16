import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import Peep from '../Peep';

describe('<Peep>', () => {
  describe('Current user created peep', () => {
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
              id: 2,
              handle: 'jon'
            }
          }
        ]
      },
      onDeletePeep: jest.fn(),
      onLikePeep: jest.fn(),
      currentUser: {
        session_key: '_2a_10_VhcqQmvbjz_4EJHs1NXi0_',
        user_id: 1
      }
    };

    test('Peep renders with delete button', () => {
      const { getByTestId, getByText } = render(<Peep {...props} />);
      const peepDiv = getByTestId('peep-text');
      const peepNameDate = getByTestId('peep-name-date');
      const likeButton = getByTestId('like-button');
      expect(peepDiv).toHaveTextContent('my first peep :)');
      expect(peepNameDate).toHaveTextContent('kay on 23-06-2018 13:21');
      expect(likeButton).toHaveTextContent('Likes: 1');
      expect(getByText(/delete/i)).not.toBeNull();
    });

    test('Peep matches snapshot with delete button', () => {
      const { container } = render(<Peep {...props} />);
      expect(container).toMatchSnapshot();
    });

    test('Delete a peep', () => {
      const { getByText } = render(<Peep {...props} />);
      const deleteButton = getByText(/delete/i);
      fireEvent.click(deleteButton);
      expect(props.onDeletePeep).toHaveBeenCalledTimes(1);
      expect(props.onDeletePeep).toHaveBeenCalledWith(props.peep.id);
    });

    test('Like a peep', () => {
      const { getByTestId } = render(<Peep {...props} />);
      const likeButton = getByTestId('like-button');
      expect(likeButton).toHaveTextContent('Likes: 1');
      fireEvent.click(likeButton);
      expect(props.onLikePeep).toHaveBeenCalledTimes(1);
      expect(props.onLikePeep).toHaveBeenCalledWith(props.peep.id);
    });
  });

  describe('Another user created peep', () => {
    const props2 = {
      peep: {
        id: 4,
        body: 'another peep',
        created_at: '2018-07-01T09:06:03.317',
        updated_at: '2018-07-23T13:21:23.317',
        user: {
          id: 2,
          handle: 'jon'
        },
        likes: [
          {
            user: {
              id: 1,
              handle: 'kay'
            }
          },
          {
            user: {
              id: 3,
              handle: 'fred'
            }
          }
        ]
      },
      onDeletePeep: jest.fn(),
      currentUser: {
        session_key: '_2a_10_VhcqQmvbjz_4EJHs1NXi0_',
        user_id: 1
      }
    };

    test('Peep renders without delete button', () => {
      const { getByTestId, queryByText } = render(<Peep {...props2} />);
      const peepDiv = getByTestId('peep-text');
      const peepNameDate = getByTestId('peep-name-date');
      const likeButton = getByTestId('like-button');
      expect(peepDiv).toHaveTextContent('another peep');
      expect(peepNameDate).toHaveTextContent('jon on 1-07-2018 09:06');
      expect(likeButton).toHaveTextContent('Likes: 2');
      expect(queryByText(/delete/i)).toBeNull();
    });

    test('Peep matches snapshot without delete button', () => {
      const { container } = render(<Peep {...props2} />);
      expect(container).toMatchSnapshot();
    });
  });
});
