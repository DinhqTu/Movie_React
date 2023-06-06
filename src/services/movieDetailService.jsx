import * as request from '../utils/httpRequest';

export const movieDetail = async (genre, id, append_to_response, language) => {
  const res = await request.get(`${genre}/${id}`, {
    params: {
      append_to_response,
      language,
    },
  });
  return res;
};
