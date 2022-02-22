export function fibonacciSpec(i: number): number {
    return i < 2 ? i : fibonacciSpec(i - 2) + fibonacciSpec(i - 1);
}
