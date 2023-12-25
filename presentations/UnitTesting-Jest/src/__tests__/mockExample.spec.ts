import { log } from '../spyExample';

describe("spyExample", () => {
    it("should call log", () => {
        const someMessage = "Hello World";

        const logSpy = jest.spyOn(console, 'log');

        log(someMessage);

        expect(logSpy).toHaveBeenCalled();
        expect(logSpy).toHaveBeenCalledWith(someMessage);
    });
});