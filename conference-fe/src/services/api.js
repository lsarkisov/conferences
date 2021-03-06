import { API_URL } from '../const/api';

const jsonHeaders = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

function callApi(endpoint, header) {
  return fetch(`${API_URL}${endpoint}`, header)
  .then(response => response.json())
  .catch(error => console.log('ERROR MESSAGE: ' + error));
}

export const getConferences = body => callApi('/conference/all', {
  method: 'get',
});

export const saveConference = body => callApi('/conference/new', {
  method: 'post',
  headers: jsonHeaders,
  body: JSON.stringify(body),
});

export const removeConference = id => callApi(`/conference/${id}`, {
  method: 'delete',
  headers: jsonHeaders
});


export const getRooms = body => callApi('/room/all', {
  method: 'get',
});
