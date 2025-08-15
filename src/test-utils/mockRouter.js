export default {
  push: jest.fn(),
  replace: jest.fn(),
  prefetch: jest.fn().mockResolvedValue(undefined),
  pathname: '/',
  query: {},
  asPath: '/',
};
