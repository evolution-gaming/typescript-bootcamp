const SIZE_BOUNDS = [10, 40] as const
export const VALUES_RANGE = [5, 100] as const

const randomInRange = (min: number, max: number): number => {
  return Math.round(Math.random() * (max - min)) + min
}

export const generateRandomArray = (n?: number): number[] => {
  const size = n ?? randomInRange(...SIZE_BOUNDS)
  return [...Array(size)].map(() => randomInRange(...VALUES_RANGE))
}