describe("Calculator", function () {
    it("returns sum of two parameters", function () {
        var calculator = new Calculator();
        expect(calculator.sum(4 ,2)).toBe(6);
    });

    it("returns the result of multiplying two parameters", function () {
        var calculator = new Calculator();
        expect(calculator.multiply(4 ,2)).toBe(8);
    });
})