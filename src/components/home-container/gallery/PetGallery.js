import React, { useEffect, useState } from 'react'
import CircularStatic from '../../commons/CircularProgressWithLabel'
import ImageListItem from '@material-ui/core/ImageListItem'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import ImageListItemBar from '@material-ui/core/ImageListItemBar'
import { Grid } from '@material-ui/core'
import { APIAURL, SEARCHAPI, IMGPATH } from './config'
import imgNoAvailable from '../../../images/imgNoAvailable.jpeg'
import './PetGallery.css'

function PetGallery({ moviesData, getMoviesFromMovieDb, getClassByRate }) {
  useEffect(() => {
    getMoviesFromMovieDb(APIAURL)
  }, [])

  return (
    <div className="my-container">
      {moviesData.length ? (
        moviesData.map((movie, idx) => (
          <div className="movie" key={idx}>
            <img
              src={
                movie.poster_path ? IMGPATH + movie.poster_path : imgNoAvailable
              }
              alt={movie.title}
            />

            <div className="movie-info">
              <h3>{movie.title} </h3>
              <span className={`${getClassByRate(movie.vote_average)}`}>
                {movie.vote_average}
              </span>
            </div>

            <div className="overview">
              <h4>Overview:</h4>
              {movie.overview}
            </div>
          </div>
        ))
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  )
}

export default PetGallery
