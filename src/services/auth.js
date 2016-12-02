import axios from 'axios';

const headers = () => ({
  headers: {
    'Content-Type': 'application/json',
    'JsonStub-User-Key': 'ef75f8d0-103f-4cc7-9ac3-7ef4cfb47a5b',
    'JsonStub-Project-Key': '6146f812-f8ac-4f96-b0c4-4f3f5f116e32'
  }
});

export const loginRequest = (username, password) => {
  return axios.post('http://jsonstub.com/login', {username, password}, headers());
}
