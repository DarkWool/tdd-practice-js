import { analyzeArray } from "./analyze.js";

test("Calculates the average from the array", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6]).average).toEqual(4);
    expect(analyzeArray([10, 10, 8, 8, 8]).average).toEqual(8.8);
});

test("Returns the min value in the array", () => {
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

test("An empty array returns undefined", () => {
    expect(analyzeArray([])).toBeUndefined();
});

test("When the argument is not an array it must return undefined", () => {
    expect(analyzeArray()).toBeUndefined();
    expect(analyzeArray(123)).toBeUndefined();
    expect(analyzeArray("not an array")).toBeUndefined();
    expect(analyzeArray(null)).toBeUndefined();
    expect(analyzeArray(true)).toBeUndefined();
    expect(analyzeArray(false)).toBeUndefined();
    expect(analyzeArray({ 0: 10, 1: 50, 2: [1, 5, 10] })).toBeUndefined();
    expect(analyzeArray({"analyze": [9, 34, 21, 2]})).toBeUndefined();
});
