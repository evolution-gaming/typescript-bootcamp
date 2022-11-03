import { myFetch, myLog } from './homework';

describe("homework", () => {
    describe("myFetch", () => {
        it("should return data", () => {
            expect(myFetch("/data")).resolves.toEqual(expect.objectContaining({ data: expect.any(Array) }));
        });
    });
    describe("myLog", () => {
        it("should log", () => {
            jest.useFakeTimers();
            const spy = jest.spyOn(console, "log");
            myLog("hello");
            jest.advanceTimersByTime(10000);
            expect(spy).toHaveBeenCalledTimes(5)
        });
    });
});