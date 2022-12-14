/**
 * @jest-environment jsdom
 */

const addition = require("../calc");

describe("Calculator", () => {
    describe("Addition function", () => {
        test("should return 42 for 20 + 22", () => {
            expect(addition(20, 22)).toBe(42);
        });
        test("should return 73 for 42 + 31", () => {
            expect(addition(42, 31)).toBe(73);
        });
        test("should return 4231 for 42 + 31", () => {
            expect(addition(42, "31")).toBe("4231");
        });
        test("should return 4231 for 42 + 31", () => {
            expect(addition(42, "31")).toBe("4231");
        });
        test("should return -88 for -56 + 32 ", () => {
            expect(addition(-56, 32)).toBe(-24);
        });
    });
    describe("Subtract function", () => {

    });
    describe("Multiply function", () => {

    });
    describe("Divide function", () => {

    });
});