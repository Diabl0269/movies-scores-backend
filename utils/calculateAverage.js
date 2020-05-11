module.exports = (scoreObjs) => {
  let sum = 0,
    count = 0
  scoreObjs.forEach((obj) => {
    sum += obj.score
    count++
  })
  if (count === 0) return { average: 0, count }
  const average = sum / count
  return { average, count }
}
