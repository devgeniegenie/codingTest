// let input = [[1, 4], [2, 3], [3, 5], [4, 6], [5, 7]];
let input = [[3, 3], [1, 3], [2, 3]];

const sol = input => {
    let sortInput = input.slice()
    sortInput.sort((a, b) => {
        if (a[1] === b[1]) return a[0] - b[0]
        return a[1] - b[1]
    })
    console.log(sortInput)
    let answer = 0
    let temp = 0
    for (let i = 0; i < input.length; i++) {
        if (temp <= sortInput[i][0]) {
            temp = sortInput[i][1]
            answer++
        }
    }
    return answer
}
console.log(sol(input))
