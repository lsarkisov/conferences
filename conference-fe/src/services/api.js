import { API_URL } from '../const/api';

const jsonHeaders = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

function callApi(endpoint, header) {
  return fetch(`${API_URL}${endpoint}`, header)
  .then(response => response.json())
  .catch(error => error);
}

export const getConferences = body => callApi('/conference/all', {
  method: 'get',
});

export const addConference = body => callApi('/conference/new', {
  method: 'post',
  headers: jsonHeaders,
  body: JSON.stringify(body),
});