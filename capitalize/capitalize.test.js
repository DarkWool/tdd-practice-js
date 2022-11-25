import { capitalize } from "./capitalize.js";

test("Returns a short string with the first character capitalized", () => {
    expect(capitalize("short")).toMatch(/Short/);
    expect(capitalize("a red fox...")).toMatch(/A red fox.../);
    expect(capitalize("s")).toMatch(/S/);
});

test("Returns a long string with the first character capitalized", () => {
    expect(capitalize("if the first char is correctly capitalized then you should fear no errors, perhaps these tests can help you out in your journey to become a better developer.")).toMatch(/If the first char is correctly capitalized then you should fear no errors, perhaps these tests can help you out in your journey to become a better developer./);
});

test("Returns undefined when the argument is not a string", () => {
    expect(capitalize(5)).toBeUndefined();
    expect(capitalize()).toBeUndefined();
    expect(capitalize(null)).toBeUndefined();
    expect(capitalize(true)).toBeUndefined();
    expect(capitalize(false)).toBeUndefined();
    expect(capitalize([])).toBeUndefined();
    expect(capitalize({"prop": "this is a string"})).toBeUndefined();
});
