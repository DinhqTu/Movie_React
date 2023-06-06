import config from '../config'

import Home from '../pages/Home'
import FilmHot from '../pages/FilmHot'
import FilmNew from '../pages/NewFilm'
import Movie from '../pages/Movie'
import Search from '../pages/Search'
import Series from '../pages/Series'
import FAQ from '../pages/FAQ'
import HeaderOnly from '../layouts/HeaderOnly'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import MovieDetail from '../pages/MovieDetail'

const publicRoutes = [
    {path:config.routes.home, component: Home},
    {path:config.routes.filmhot, component: FilmHot, layout: HeaderOnly},
    {path:config.routes.filmnew, component: FilmNew},
    {path:config.routes.detail, component: MovieDetail, layout: HeaderOnly},
    {path:config.routes.movie, component: Movie},
    {path:config.routes.series, component: Series},
    {path:config.routes.search, component: Search, layout: HeaderOnly},
    {path:config.routes.faq, component: FAQ, layout: HeaderOnly},
    {path:config.routes.login, component: Login, layout: null},
    {path:config.routes.signup, component: Signup, layout:null},
]

const privateRoutes = []

export {publicRoutes, privateRoutes}