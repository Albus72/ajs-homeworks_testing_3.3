import loadUser from '../user';
import httpGet from '../http';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('should call loadUser once', async () => {
  // const promise = new Promise((resolve, reject) => {})
  httpGet.mockReturnValue('promise');

  const response = await loadUser(1);
  expect(response).toEqual({
    completed: false,
    id: 1,
    title: 'delectus aut autem',
    userId: 1,
  });
  expect(httpGet).toBeCalledWith('https://jsonplaceholder.typicode.com/todos/1');
});
