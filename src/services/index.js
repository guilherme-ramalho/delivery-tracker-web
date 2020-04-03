import axios from 'axios';

const request = ({ method, endpoint }) =>
  axios({
    method: method || 'GET',
    timeout: 7000,
    headers: {
      'Content-Type': 'application/json',
    },
    baseURL: `http://localhost:3333/${endpoint}`,
  });

export default request;
