function caesarCipher(str, key) {
    if (typeof str !== "string" || typeof key !== "number") return;

    let encryptedStr = "";
    for (const char of str) {
        const unicodeVal = char.charCodeAt(0);
        
        let lowestVal;
        if (unicodeVal >= 97 && unicodeVal <= 122) lowestVal = 97;
        else if (unicodeVal >= 65 && unicodeVal <= 90) lowestVal = 65;
        else {
            encryptedStr += char;
            continue;
        }
        
        let newChar = (((unicodeVal + key - lowestVal) % 26) + lowestVal);
        encryptedStr += String.fromCharCode(newChar);
    }

    return encryptedStr;
}

export {
    caesarCipher
};