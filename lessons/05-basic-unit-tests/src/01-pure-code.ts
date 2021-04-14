export const fibonacci = (n: number): number =>
  n < 1
    ? 0
    : n <= 2
      ? 1
      : fibonacci(n - 1) + fibonacci(n - 2)

export const isPrime = (num: number): boolean => {
  if (Number.isNaN(num)) {
    throw new Error("NaN argument passed.")
  }

  if (!Number.isFinite(num)) {
    throw new Error("Infinite argument passed.")
  }

  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) {
      return false
    }
  }

  return num > 1
}
