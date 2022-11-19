import { calculator } from "./calculator.js";

test("Sums two numbers", () => {
    expect(calculator.add(1, 2)).toEqual(3);
    expect(calculator.add(12, 4)).toEqual(16);
    expect(calculator.add(50, 100)).toEqual(150);
    expect(calculator.add(8500, 2089)).toEqual(10589);
    expect(calculator.add(1251012, 779276)).toEqual(2030288);
});
