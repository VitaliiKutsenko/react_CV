import axios from 'axios';

export const axiosFetch = axios.create({
  baseURL: 'https://university-api.techstack.dev',
  headers: { Authorization: `${localStorage.getItem('access_token')}` },
});
