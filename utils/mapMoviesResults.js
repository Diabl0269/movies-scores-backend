module.exports = (results) =>
  results.map((movie) => {
    const { title, overview, poster_path } = movie
    return { title, overview, poster_path }
  })
