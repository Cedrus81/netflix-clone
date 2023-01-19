const API_KEY = '29dd9ee858e138f6c010a7f72acdc43c'
const SHORTHAND = `/discover/movie?api_key=${API_KEY}&with_genres=`
const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: SHORTHAND + '28',
    fetchComedyMovies: SHORTHAND + '35',
    fetchHorrorMovies: SHORTHAND + '27',
    fetchRomanceMovies: SHORTHAND + '10749',
    fetchDocumentaries: SHORTHAND + '99'
}

export default requests