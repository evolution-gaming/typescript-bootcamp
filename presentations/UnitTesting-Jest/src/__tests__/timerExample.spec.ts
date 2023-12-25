import { timeExample, timeExampleTwo } from "../timerExample";

describe('timerExample', () => {
    const logSpy = jest.spyOn(console, 'log');

    beforeEach(() => {
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.useRealTimers();
        logSpy.mockClear();
    });


    it('should call console.log', () => {
        timeExample();

        jest.runOnlyPendingTimers();

        expect(logSpy).toHaveBeenCalledTimes(1);
    });

    it('should call console.log', () => {
        timeExample();

        jest.runOnlyPendingTimers();

        expect(logSpy).toHaveBeenCalledTimes(1);
    });
});