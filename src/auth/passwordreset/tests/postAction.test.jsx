import resetPasswordAction, { API_URI } from '../redux/actions/postAction';

let originalFetch;
let originalSetTimeout;
const mockResponse = {
    user: 'some-user',
}
const mockResult = { message: 'success', json: jest.fn(() => mockResponse) };
const mockFetch = jest.fn(() => Promise.resolve(mockResult));
const dispatch = jest.fn();

const setUpMocks = () => {
  originalFetch = window.fetch;
  originalSetTimeout = window.setTimeout;
  window.fetch = mockFetch;
  window.setTimeout = jest.fn(fn => fn());
};
const unDoMocks = () => {
  window.fetch = originalFetch;
  window.setTimeout = originalSetTimeout;
};

const mockPostData = { email: 'h@me.com' };
const options = {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
  },
  body: JSON.stringify(mockPostData),
};
const mockProps = {
    history: jest.fn(),
}
describe('resetPasswordAction', () => {
  beforeAll(() => {
    setUpMocks();
  });
  afterAll(() => {
    unDoMocks();
  });
  it('should call fetch with the right data', () => {
    const expected = [API_URI, options];
    resetPasswordAction(mockPostData, mockPostData)(dispatch);
    expect(mockFetch).toHaveBeenCalledWith(...expected);
  });
});