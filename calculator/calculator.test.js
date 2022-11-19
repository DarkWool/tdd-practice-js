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
});

test("Divides two numbers", () => {
    expect(calculator.divide(4, 2)).toEqual(2);
    expect(calculator.divide(10, 3)).toBeCloseTo(3.33);
    expect(calculator.divide(678, 12)).toBeCloseTo(56.5);
    expect(calculator.divide(4120, 10)).toEqual(412);
    expect(calculator.divide(1394215, 500)).toBeCloseTo(2788.43);
});

test("Multiplies two numbers", () => {
    expect(calculator.multiply(5, 3)).toEqual(15);
    expect(calculator.multiply(15, 6)).toEqual(90);
    expect(calculator.multiply(840, 3)).toEqual(2520);
    expect(calculator.multiply(6999, 24)).toEqual(167976);
    expect(calculator.multiply(2351645, 5)).toEqual(11758225);
});
