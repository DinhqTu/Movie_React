import Axios from 'axios';

export const request = Axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyN2E4ZWI3MDhiZTEwMWNjYzE5OTk4MGZmZTdiODE1OSIsInN1YiI6IjY0NjUwYzQwNDRhNDI0MDBlNGI4NTA1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FRdHQVVuVfqQl6BFA1SWgbKLh5DyRzEec12zAfmUHwk',
  },
});

export const get = async (path, options = {}) => {
  const response = await request.get(path, options);
  return response.data;
};
