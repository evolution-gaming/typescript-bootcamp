import { myLog } from "../basicTimer"

describe("myLog", () => {
    const logSpy = jest.spyOn(console, "log")
    afterAll(() => {
        jest.useRealTimers()
    })
    beforeAll(() => {
        jest.useFakeTimers()
    })
    it("should log", () => {
        myLog("hello")
        
        jest.advanceTimersByTime(3000)
        // jest.runAllTimers()
        // jest.runOnlyPendingTimers()

        expect(logSpy).toHaveBeenCalledTimes(1)
    })
})