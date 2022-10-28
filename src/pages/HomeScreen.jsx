import React from 'react'
import Banner from '../components/Banner'
import Lists from '../components/Lists.jsx'
import NavBar from '../components/NavBar'
import requests from '../api/requests'
import './HomeScreen.css'
const HomeScreen = () => {
  return (
    <div className="homeScreen">
      <NavBar />

      <Banner />

      <Lists
        title="NETFLIX ORIGINALS"
        fetchURL={requests.fetchNetflixOriginal}
        isLargeList
      />
      <Lists title="Trending-Now" fetchURL={requests.fetchTrending} />
      <Lists title="Top-Rated" fetchURL={requests.fetchToprated} />
      <Lists title="Action" fetchURL={requests.fetchActionMovies} />
      <Lists title="Comedy" fetchURL={requests.fetchComedyMovies} />
      <Lists title="Horror" fetchURL={requests.fetchHorrorMovies} />
      <Lists title="Romance" fetchURL={requests.fetchRomanceMovies} />
      <Lists title="Documentary" fetchURL={requests.fetchDocumentaries} />
    </div>
  )
}

export default HomeScreen
