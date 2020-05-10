module.exports = (results) =>
  results.map((movie) => {
    const { title, genre_ids, release_date } = movie
    const releaseYear = release_date.slice(0, 4)
    return { name: title, genre_ids, releaseYear }
  })
