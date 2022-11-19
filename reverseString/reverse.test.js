import { reverseString } from "./reverse.js";

test("Reverses a string successfully", () => {
    expect(reverseString("Hello world!")).toMatch("!dlrow olleH");
    expect(reverseString("Heroku should remain free.")).toMatch(".eerf niamer dluohs ukoreH");
});

test("Returns undefined when the argument is not a string", () => {
    expect(reverseString(5)).toBeUndefined();
    expect(reverseString()).toBeUndefined();
    expect(reverseString(null)).toBeUndefined();
    expect(reverseString(true)).toBeUndefined();
    expect(reverseString(false)).toBeUndefined();
    expect(reverseString([])).toBeUndefined();
    expect(reverseString({"prop": "hello"})).toBeUndefined();
});
