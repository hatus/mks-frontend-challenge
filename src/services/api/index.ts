import axios from 'axios';

const BASE_URL = 'https://mks-challenge-api-frontend.herokuapp.com/';

const api = axios.create({
  baseURL: `${BASE_URL}api/v1`,
});

export { api };
