module.exports = (obj) => {
  const { min, max } = obj
  const edgesObj = {}
  if (min) edgesObj.$gte = min
  if (max) edgesObj.$lte = max
  return edgesObj
}
