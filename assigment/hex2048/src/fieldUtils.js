const minusToPlusN = (n, f) => {
  Array.from({ length: n * 2 + 1 }, (_, x) => n - x).forEach(f)
}

const getFieldPoints = radius => {
  let points = []
  minusToPlusN(radius - 1, x =>
    minusToPlusN(radius - 1, y => minusToPlusN(radius - 1, z => x + y + z === 0 && points.push({ x, y, z }))),
  )
  return points
}

const pickRandomN = (array, n) =>
  array
    .map(a => ({ order: rng(), value: a }))
    .sort((a, b) => a.order - b.order)
    .map(a => a.value)
    .slice(0, n)

const rng = () => Math.random()
const min = (a, b) => Math.min(a, b)
const arePointsSame = (a, b) => !["x", "y", "z"].some(v => a[v] !== b[v])

function getRNGPoints(radius, userPoints) {
  const availablePositions = getFieldPoints(radius).filter(a => userPoints.every(b => !arePointsSame(a, b)))
  const pointsCount = min(availablePositions.length, userPoints.length === 0 ? 3 : 1 + (rng() > 0.8 ? 1 : 0))
  const selectedValue = userPoints.length === 0 ? 2 : rng() > 0.5 ? 2 : 4
  return pickRandomN(availablePositions, pointsCount).map(p => ({ ...p, value: selectedValue }))
}

module.exports = {
  minusToPlusN,
  getFieldPoints,
  pickRandomN,
  rng,
  min,
  arePointsSame,
  getRNGPoints,
}
