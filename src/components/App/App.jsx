
import { lazy, Suspense } from "react";
import { NavLink, Route, Routes } from 'react-router-dom';

import css from './App.module.css'

const LazyHome = lazy(()=> import('pages/Homepage/Homepage.jsx'));
const LazyMovies = lazy(()=> import('pages/Movies/Movies.jsx'));
const LazyMovieDetails = lazy(()=> import('pages/MovieDetails/MovieDetails.jsx'))
const LazyCastPage = lazy(()=> import('pages/CastPage/CastPage.jsx'));
const LazyReviews = lazy(()=> import ('pages/ReviewsPage/ReviewsPage.jsx'));

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
    <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="/" element={<LazyHome/>}/>
      <Route path="movies" element={<LazyMovies/>}/>
      <Route path="movies/:movieId" element={<LazyMovieDetails/>}>
        <Route path="cast" element={<LazyCastPage/>} />
        <Route path="reviews" element={<LazyReviews/>} />
      </Route>
      <Route path="*" element={<div>Page not found </div>} />
    </Routes>
    </Suspense>
    </div>
  )
}
