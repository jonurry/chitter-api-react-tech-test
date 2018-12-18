export default class Api {
  async getPeeps(url) {
    return [
      {
        id: 3,
        body: 'my first peep :)',
        created_at: '2018-06-23T13:21:23.317Z',
        updated_at: '2018-06-23T13:21:23.317Z',
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
      },
      {
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
      {
        id: 5,
        body: 'and another peep',
        created_at: '2018-07-02T23:56:43.317',
        updated_at: '2018-07-23T13:21:23.317',
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
          },
          {
            user: {
              id: 3,
              handle: 'fred'
            }
          }
        ]
      }
    ];
  }
  async getSession(handle, session) {
    return {
      session_key: '_2a_10_VhcqQmvbjz_4EJHs1NXi0_',
      user_id: 1
    };
  }
}
