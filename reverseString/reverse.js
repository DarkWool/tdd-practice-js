function reverseString(str) {
    if (typeof str !== "string") return;
    
    return str.split("").reverse("").join("");
}

export {
    reverseString,
};
