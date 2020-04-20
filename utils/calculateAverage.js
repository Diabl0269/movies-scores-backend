module.exports = (scoreObjs) => {
  let sum = 0,
    count = 0
  scoreObjs.forEach((obj) => {
    sum += obj.score
    count++
  })

  const average = sum / count
  return { average, count }
}
