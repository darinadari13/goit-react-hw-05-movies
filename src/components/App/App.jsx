import HomePage from 'pages/Homepage/Homepage';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import CastPage from 'pages/CastPage/CastPage'
import { NavLink, Route, Routes, Outlet } from 'react-router-dom';

import css from './App.module.css'


function getLinkClassname({ isActive }) {
  return isActive ? css.navLinkActive : css.navLink
}

export default function App () {

  return (
    <div className={css.appContainer}>
    <header className={css.header}>
      <nav>
        <NavLink className={getLinkClassname} to="/">Home</NavLink>
        <NavLink className={getLinkClassname} to="/movies">Movies</NavLink>
      </nav>
    </header>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="movies" element={<div>Movies</div>}/>
      <Route path="movies/:movieId" element={<MovieDetails/>}>
        <Route path="cast" element={<CastPage/>} />
        <Route path="reviews" element={<div>Reviews</div>} />
      </Route>
      <Route path="*" element={<div>Page not found </div>} />
    </Routes>
    </div>
  )
}
