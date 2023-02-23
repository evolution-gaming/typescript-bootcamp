import { someNumber } from './../someNumber';

describe('someNumber', () => {
    it('should return a number', () => {
        const number = someNumber()

        expect(number).toBeGreaterThan(0);
        expect(number).toBeLessThan(100);
    });
});
