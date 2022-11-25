import { caesarCipher } from "./caesar.js";

test("Returns a string correctly encripted by a given key", () => {
    expect(caesarCipher("Soldier of heaven", 2)).toMatch(/Uqnfkgt qh jgcxgp/);
    expect(caesarCipher("White Friday, I'll take the stairway to heaven", 1)).toMatch(/Xijuf Gsjebz, J'mm ublf uif tubjsxbz up ifbwfo/);
});

test("Wraps from letter Z to A correctly", () => {
    expect(caesarCipher("I'm wasting here, can anyone wash it all away?", 25)).toMatch(/H'l vzrshmf gdqd, bzm zmxnmd vzrg hs zkk zvzx?/);
    expect(caesarCipher("'Cause the end is where we begin, where broken hearts mend and start to beat again...", 10)).toMatch(/'Mkeco dro oxn sc grobo go loqsx, grobo lbyuox rokbdc woxn kxn cdkbd dy lokd kqksx.../);
    expect(caesarCipher("Z", 2)).toMatch(/B/);
    expect(caesarCipher("Z", 1)).toMatch(/A/);
});

test("Works with keys greater than 25", () => {
    expect(caesarCipher("Are we born to be broken, sinners, and thieves?", 47)).toMatch(/Vmz rz wjmi oj wz wmjfzi, ndiizmn, viy ocdzqzn?/);
    expect(caesarCipher("Mauris blandit eget augue non iaculis. Aenean aliquam elit vitae elit egestas, at bibendum eros pellentesque. Etiam velit lorem, pretium eget tristique ac, vestibulum sed velit.", 80))
        .toMatch(/Ocwtku dncpfkv gigv cwiwg pqp kcewnku. Cgpgcp cnkswco gnkv xkvcg gnkv giguvcu, cv dkdgpfwo gtqu rgnngpvguswg. Gvkco xgnkv nqtgo, rtgvkwo gigv vtkuvkswg ce, xguvkdwnwo ugf xgnkv./);
});

test("Returns undefined with invalid arguments", () => {
    expect(caesarCipher()).toBeUndefined();
    expect(caesarCipher(12312, 2)).toBeUndefined();
    expect(caesarCipher(false, null)).toBeUndefined();
    expect(caesarCipher(true, 10)).toBeUndefined();
    expect(caesarCipher([0, "asdas", 199], 4)).toBeUndefined();
    expect(caesarCipher({"prop": "String to return"}, 5)).toBeUndefined();
});
