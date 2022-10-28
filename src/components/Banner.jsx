import React, {useEffect, useState} from 'react'
import axios from '../api/axios.js'
import requests from '../api/requests.js'

import './Banner.css'
const Banner = () => {
  const [movie, setmovie] = useState([])

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await axios.get(requests.fetchNetflixOriginal)

      setmovie(
        response.data.results[
          Math.floor(Math.random() * (response.data.results.length - 1 - 1) + 1)
        ],
      )
      return response
    }

    fetchMovie()
  }, [])
  console.log(movie?.backdrop_path)
  return (
    <header
      className="banner"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        backgroundPosition: 'center center',
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">{movie?.name}</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <p className="banner__description">{movie?.overview}</p>
      </div>
      <div className="banner--fadebottom" />
    </header>
  )
}

export default Banner
