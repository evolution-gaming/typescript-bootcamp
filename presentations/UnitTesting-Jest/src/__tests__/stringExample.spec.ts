describe("stringExample", () => {
    test("string", () => {
        const hw = "Hello World";
        const hwArray = hw.split(" ");

        expect(hw).toBe("Hello World");

        expect(hwArray).toContain("Hello");
        expect(hwArray).toContain("World");
    });
});
