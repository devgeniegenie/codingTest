const insertionSol = arr => {
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] < arr[j]) [arr[j], arr[i]] = [arr[i], arr[j]]
        }
    }
    return arr
}
console.log(insertionSol([9, 1, 6, 8, 4, 3, 2, 0]))
