function analyzeArray(arr) {
    if (Array.isArray(arr) === false || arr.length === 0) return;

    const average = arr.reduce((num, total) => total + num) / arr.length;
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const length = arr.length;

    return {
        average,
        min,
        max,
        length
    }
}

export {
    analyzeArray
};
