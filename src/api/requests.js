const API_KEY = '775ac90710712ed593b55bb00172e2dc'
const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US&page=1`,
  fetchNetflixOriginal: `/discover/tv/?api_key=${API_KEY}&with_networks=213`,
  fetchToprated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default requests
