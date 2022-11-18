import { capitalize } from "./capitalize.js";

// Takes a string and returns it with the first character capitalized
test("Returns a short string with the first character capitalized", () => {
    expect(capitalize("short")).toMatch(/Short/);
    expect(capitalize("a red fox...")).toMatch(/A red fox.../);
});

test("Returns a long string with the first character capitalized", () => {
    expect(capitalize("if the first char is correctly capitalized then you should fear no errors, perhaps these tests can help you out in your journey to become a better developer.")).toMatch(/If the first char is correctly capitalized then you should fear no errors, perhaps these tests can help you out in your journey to become a better developer./);
});
