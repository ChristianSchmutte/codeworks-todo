const BASE_URL = process.env.REACT_APP_SERVER ?? '';

function fetchRequest(path, options) {
  // const url = path ? URL + path : URL;
  const url = BASE_URL + path
  console.log('FINAL URL:',url, 'BASE:', BASE_URL, 'path')
  return fetch(url, options)
    .then((res) => (res.status <= 400 ? res : Promise.reject(res)))
    .then((res) => (res.status !== 204 ? res.json() : res))
    .catch((error) => console.error(error));
}

export function getTodos() {
  return fetchRequest('/todo');
}

export function addTodo(todo) {
  return fetchRequest(`/todo`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  });
}

export function updateTodo(id, changes) {
  return fetchRequest(`/todo/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(changes),
  });
}
