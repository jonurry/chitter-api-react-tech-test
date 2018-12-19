import React from 'react';
import { render, fireEvent, wait } from 'react-testing-library';
import CreatePeepForm from '../CreatePeepForm';

const props = {
  createPeep: jest.fn(body => {
    return {
      id: 7,
      body: body,
      created_at: '2018-10-23T13:21:23.317',
      updated_at: '2018-10-23T13:21:23.317',
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
    };
  }),
  onNewPeep: jest.fn()
};

describe('<CreatePeepForm>', () => {
  test('Renders and submits new peep', async () => {
    const { getByLabelText, getByText } = render(<CreatePeepForm {...props} />);
    const peepText = 'Peep no. 7';
    getByLabelText(/peep:/i).value = peepText;
    const submitButton = getByText(/submit/i);
    await wait(() => fireEvent.click(submitButton));
    expect(props.onNewPeep).toHaveBeenCalledTimes(1);
    expect(props.createPeep).toHaveBeenCalledTimes(1);
  });
});
