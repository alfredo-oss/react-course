import { capitalizeFirstLetter } from "../capitalizeFirstLetter";

describe("capitalizeFirstLetter", () => {
    it("should capitalize first letter", () => {
        expect(capitalizeFirstLetter("hello")).toBe("Hello");
    });

    it("should return empty string if empty string is passed", () => {
        expect(capitalizeFirstLetter("")).toBe("");
    })

    it("should return the same string if the first letter is already capitalized", () => {
        expect(capitalizeFirstLetter("Hello")).toBe("Hello");
    });

    it("should capitalize the first letter of a sentence", () => {
        expect(capitalizeFirstLetter("hello world")).toBe("Hello world");
    });

});