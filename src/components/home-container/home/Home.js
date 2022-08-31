import React, { useState } from 'react'
import { StylesProvider, Chip, Container } from '@material-ui/core'
import './Home.css'
import PetGallery from '../gallery/PetGallery'
import { APIAURL, SEARCHAPI } from '../gallery/config'

function Home() {
  const [moviesData, setMoviesData] = useState([])
  const [input, setInput] = useState('')

  const getMoviesFromMovieDb = async (apiType) => {
    const resp = await fetch(apiType)
    console.log('resp', resp)
    const respData = await resp.json()
    console.log(' respData', respData)
    setMoviesData(respData.results)
  }

  const getClassByRate = (vote) => {
    if (vote >= 7) {
      return `green`
    } else if (vote >= 5) {
      return `orange`
    } else {
      return `red`
    }
  }

  const searchMovie = async (e) => {
    e.preventDefault()
    const searchTerm = input
    console.log(' searchTerm', searchTerm)
    console.log('SEARCHAPI', SEARCHAPI)
    getMoviesFromMovieDb(SEARCHAPI + searchTerm)
    setInput('')
  }

  return (
    <StylesProvider injectFirst>
      <div className="home-container">
        <div className="label-btns">
          <Chip
            size="large"
            label="Good Rating 7 - 10"
            className="good"
            clickable
          />

          <Chip
            size="large"
            className="okay"
            label="Okay Rating 5 -7"
            clickable
          />

          <Chip
            size="large"
            label="Less than five rating"
            clickable
            className="bad"
          />

          {input ? (
            <input
              type="button"
              value="Go"
              className="search-btn"
              onClick={searchMovie}
            />
          ) : (
            <input type="button" value="" className="search-btn" />
          )}

          <input
            type="text"
            id="search"
            placeholder="search"
            className="search"
            onChange={(e) => setInput(e.target.value)}
          />

          {/* <form action="" id="form">
            <input
              type="text"
              id="search"
              placeholder="search"
              class="search"
            />
          </form> */}
        </div>
        <PetGallery
          moviesData={moviesData}
          setMoviesData={setMoviesData}
          getMoviesFromMovieDb={getMoviesFromMovieDb}
          getClassByRate={getClassByRate}
        />
      </div>
    </StylesProvider>
  )
}

export default Home
