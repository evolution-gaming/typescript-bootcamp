const DELAY = 2000;
/**
 * TODO: Homework
 * Test log() using, but not limited to, the following:
 * global delay variable
 * beforeAll()
 * jest.useFakeTimers()
 * jest.advanceTimersByTime()
 * .spyOn()
 * .toHaveBeenCalled()
 * .toHaveBeenCalledWith()
 * .toHaveBeenLastCalledTimes()
 * not.toHaveBeenCalled()
 */
export function myLog(msg: unknown) {
    const interval = setInterval(() => console.log(msg), DELAY);
    return () => clearInterval(interval);
}

/**
 * TODO: Homework
 * Implement myFetch() using, but not limited to, the following:
 * expect.arrayContaining()
 * expect.objectContaining()
 * expect.any()
 * .resolves
 * .toThrow()
 */
export function myFetch(api: string) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ data: [1,2,3] });
        }, 2000);
    });
}
