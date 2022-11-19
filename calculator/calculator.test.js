import { calculator } from "./calculator.js";

test("Sums two numbers", () => {
    expect(calculator.add(1, 2)).toEqual(3);
    expect(calculator.add(12, 4)).toEqual(16);
    expect(calculator.add(50, 100)).toEqual(150);
    expect(calculator.add(8500, 2089)).toEqual(10589);
    expect(calculator.add(1251012, 779276)).toEqual(2030288);
});

test("Subtracts two numbers", () => {
    expect(calculator.subtract(2, 1)).toEqual(1);
    expect(calculator.subtract(36, 15)).toEqual(21);
    expect(calculator.subtract(234, 112)).toEqual(122);
    expect(calculator.subtract(6340, 2119)).toEqual(4221);
    expect(calculator.subtract(2890910, 1034400)).toEqual(1856510);
})
