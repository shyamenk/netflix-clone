import React, {useState, useEffect} from 'react'
import axios from '../api/axios.js'
import './Lists.css'

const Lists = ({title, fetchURL, isLargeList}) => {
  const [movies, setmovies] = useState([])

  const BASE_URL = 'https://image.tmdb.org/t/p/original'
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(fetchURL)
      setmovies(response.data.results)
      return response
    }
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="lists">
      <h2>{title}</h2>
      <div className="list__posters">
        {movies.map(
          movie =>
            ((isLargeList && movie.poster_path) ||
              (!isLargeList && movie.backdrop_path)) && (
              <img
                className={`list__poster ${
                  isLargeList && 'list__poster_large'
                }`}
                key={movie.id}
                src={`${BASE_URL}${
                  isLargeList ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            ),
        )}
      </div>
    </div>
  )
}

export default Lists
