import React, { Suspense, lazy } from 'react'
import { Route, Switch } from 'react-router-dom'
import routes from './routes'
import AppBar from './components/AppBar'
import Loader from './components/Loader'
import s from './App.css'

const HomePage = lazy(() => import('./pages/HomePage' /*webpackChunkName: "homo-view" */))
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage' /*webpackChunkName: "movie-details-page" */))
const MoviesPage = lazy(() => import('./pages/MoviesPage' /*webpackChunkName: "movies-page" */))
const Cast = lazy(() => import('./pages/Cast' /*webpackChunkName: "cast" */))
const Reviews = lazy(() => import('./pages/Reviews' /*webpackChunkName: "reviews" */))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage' /*webpackChunkName: "not-found-page" */))

function App() {
  return (
    <>
      <AppBar />

      <Suspense fallback={<Loader/>}>
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <Route path={routes.movieDetailsPage} component={MovieDetailsPage} />
          <Route path={routes.moviesPage} component={MoviesPage} />
          <Route path={routes.cast} component={Cast} />
          <Route path={routes.reviews} component={Reviews} />
          <Route component={NotFoundPage} />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
