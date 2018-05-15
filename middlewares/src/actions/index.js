import axios from 'axios';
import {
  FETCH_USERS
} from './types';

export function fetchUsers() {
  //fake api
  //we use axios to request the json and access it, pass it as payload the data we need
  const request = axios.get('http://jsonplaceholder.typicode.com/users');

  return {
    type: FETCH_USERS,
    payload: request
  };
}