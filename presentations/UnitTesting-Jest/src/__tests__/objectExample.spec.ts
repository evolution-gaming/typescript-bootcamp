describe('objectExample', () => {
    it('should return an object', () => {
        const object = {
            name: 'John'
        };

        expect(object).toStrictEqual({ name: 'John' });
    });
});