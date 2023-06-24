import * as request from '../utils/httpRequest';

export const popularList = async (language, page = '1') => {
  const res = await request.get('movie/popular', {
    params: {
      language,
      page,
    },
  });
  return res;
};

export const newMovieList = async (language, page = '1') => {
  const res = await request.get('movie/now_playing', {
    params: {
      language,
      page,
    },
  });
  return res;
};

export const newTVSeries = async (language, page) => {
  const res = await request.get('trending/tv/week', {
    params: {
      language,
      page,
    },
  });
  return res;
};

export const topRated = async (language, page = '1') => {
  const res = await request.get('movie/top_rated', {
    params: {
      language,
      page,
    },
  });
  return res;
};

export const similar = async (genre, id, language, page = '1') => {
  const res = await request.get(`${genre}/${id}/similar`, {
    params: {
      language,
      page,
    },
  });
  return res;
};

export const upcoming = async (language, page = '1') => {
  const res = await request.get('movie/upcoming', {
    params: {
      language,
      page,
    },
  });
  return res;
};

export const discover = async (
  type,
  with_genres,
  with_original_language,
  primary_release_year,
  with_runtime_lte,
  sort_by = 'popularity.desc',
  language = 'vi-VN',
  page = '1',
) => {
  const res = await request.get(`discover/${type}`, {
    params: {
      with_genres,
      with_original_language,
      primary_release_year,
      'with_runtime.lte': with_runtime_lte,
      sort_by,
      language,
      page,
    },
  });
  return res;
};

export const trending = async (time, language = 'vi-VN') => {
  const res = await request.get(`trending/movie/${time}`, {
    params: {
      language,
    },
  });
  return res;
};
