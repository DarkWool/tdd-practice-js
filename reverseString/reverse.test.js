import { reverseString } from "./reverse.js";

test("Reverses a string successfully", () => {
    expect(reverseString("Hello world!")).toMatch("!dlrow olleH");
    expect(reverseString("Heroku should remain free.")).toMatch(".eerf niamer dluohs ukoreH");
    expect(reverseString("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat, erat pulvinar finibus tempus, libero ex finibus dui, a ultrices felis quam ac enim.")).toMatch(".mine ca mauq silef secirtlu a ,iud subinif xe orebil ,supmet subinif ranivlup tare ,tauqesnoc sullesahP .tile gnicsipida rutetcesnoc ,tema tis rolod muspi meroL");
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
