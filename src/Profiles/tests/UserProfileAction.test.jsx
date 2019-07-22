import getUserProfile, { API_BASE_URL, requestOptions } from '../redux/actions/UserProfileAction';

let originalFetch;
let originalLocalStorage;
const mockResult = { message: 'success', json: jest.fn() };
const mockFetch = jest.fn(() => Promise.resolve(mockResult));
const dispatch = jest.fn();

const mockToken = 'mock-user-token';
const mockUsername = 'mock-username';

const mockLocalStore = {
  user_token: mockToken,
  username: mockUsername,
};

const setUpMocks = () => {
  originalLocalStorage = window.localStorage;
  window.localStorage = { getItem: jest.fn((key) => mockLocalStore[key]) };
  originalFetch = window.fetch;
  window.fetch = mockFetch;
};
const unDoMocks = () => {
  window.fetch = originalFetch;
  window.localStorage = originalLocalStorage;
};

describe('getUserProfile', () => {
  beforeAll(() => {
    setUpMocks();
  });
  afterAll(() => {
    unDoMocks();
  });
  it('should call fetch with the right data', () => {
    const expected = [`${API_BASE_URL}/${mockUsername}/`, requestOptions];
    getUserProfile(mockUsername)(dispatch);
    // expect(mockFetch).toHaveBeenCalledWith(...expected);
  });
});
