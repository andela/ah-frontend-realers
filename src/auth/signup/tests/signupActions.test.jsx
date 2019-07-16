import signUpUser, { API_URI } from '../redux/actions/signUpAction';

jest.mock('../helper');

let originalFetch;
const mockResult = { message: 'success', json: jest.fn() };
const mockFetch = jest.fn(() => Promise.resolve(mockResult));
const dispatch = jest.fn();

const setUpMocks = () => {
  originalFetch = window.fetch;
  window.fetch = mockFetch;
};
const unDoMocks = () => {
  window.fetch = originalFetch;
};

const mockPostData = { user: 'sfgsfg' };
const options = {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
  },
  body: JSON.stringify(mockPostData),
};

describe('signUpUser', () => {
  beforeAll(() => {
    setUpMocks();
  });
  afterAll(() => {
    unDoMocks();
  });
  it('should call fetch with the right data', () => {
    const expected = [API_URI, options];
    signUpUser(mockPostData)(dispatch);
    expect(mockFetch).toHaveBeenCalledWith(...expected);
  });
});
