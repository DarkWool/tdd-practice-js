import { analyzeArray } from "./analyze.js";

test("Calculates the average value", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6]).average).toEqual(4);
    expect(analyzeArray([10, 10, 8, 8, 8]).average).toEqual(8.8);
});

test("Returns the minimum value in the array", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6]).min).toEqual(1);
    expect(analyzeArray([10, 10, 8, 8, 8]).min).toEqual(8);
});

test("Returns the max value in the array", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6]).max).toEqual(8);
    expect(analyzeArray([10, 10, 8, 8, 8]).max).toEqual(10);
});

test("Returns the array's length", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6]).length).toEqual(6);
    expect(analyzeArray([10, 10, 8, 8, 8]).length).toEqual(5);
});