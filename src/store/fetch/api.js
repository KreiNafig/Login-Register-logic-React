const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

const handleResponse = async (response) => {
  if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
  return response.json();
};

export const api = {
  get: (endpoint) => fetch(`${BASE_URL}${endpoint}`).then(handleResponse),
  post: (endpoint, data) => fetch(`${BASE_URL}${endpoint}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then(handleResponse),
  put: (endpoint, data) => fetch(`${BASE_URL}${endpoint}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then(handleResponse),
  delete: (endpoint) => fetch(`${BASE_URL}${endpoint}`, {
    method: 'DELETE'
  }).then(handleResponse)
};