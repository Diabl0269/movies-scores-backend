const convertEdges = require('./convertEdges')

module.exports = (query) => {
  const { score, releaseYear, genres } = query

  const queryObj = {}

  if (score.min || score.max) queryObj['averageScoreObj.average'] = convertEdges(score)
  if (releaseYear.min || releaseYear.max) queryObj['releaseYear'] = convertEdges(releaseYear)
  if (genres.length > 0) queryObj['genre_ids'] = { $in: genres }

  return queryObj
}
