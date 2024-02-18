import { convertLbsToKg } from "../convertLbsToKg";

const testData = [
    [1, "0.45"],
    [2, "0.91"],
    [10, "4.54"],
    [100, "45.36"],
];

describe("Convert lbs to kg", () => {
    it.each(testData)("should convert %s lbs to %s kg", (lbs, expected) => {
        expect(convertLbsToKg(Number(lbs))).toBe(expected)
    })
});