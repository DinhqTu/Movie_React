import config from '../config';
import Home from '../pages/Home';
import FilmHot from '../pages/FilmHot';
import MovieUpComing from '../pages/MovieUpComing';
import Movie from '../pages/Movie';
import Search from '../pages/Search/';
import TvSeries from '../pages/TvSeries';
import FAQ from '../pages/FAQ';
import HeaderOnly from '../layouts/HeaderOnly';
import LayoutDetail from '../layouts/LayoutDetail';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import MovieDetail from '../pages/MovieDetail';
import Collection from '../pages/Collection';
import Video from '../pages/Video/Video';

const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.filmhot, component: FilmHot, layout: HeaderOnly },
  { path: config.routes.upcoming, component: MovieUpComing },
  { path: config.routes.moviedetail, component: MovieDetail, layout: LayoutDetail },
  { path: config.routes.collection, component: Collection, layout: HeaderOnly },
  { path: config.routes.tvdetail, component: MovieDetail, layout: LayoutDetail },
  { path: config.routes.movie, component: Movie },
  { path: config.routes.series, component: TvSeries },
  { path: config.routes.search, component: Search, layout: HeaderOnly },
  { path: config.routes.faq, component: FAQ, layout: HeaderOnly },
  { path: config.routes.login, component: Login, layout: null },
  { path: config.routes.signup, component: Signup, layout: null },
  { path: config.routes.video, component: Video, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
