import * as request from '../utils/httpRequest';

export const search = async (query, language, page) => {
  const res = await request.get('search/multi', {
    params: {
      query,
      language,
      page,
    },
  });
  return res;
};
