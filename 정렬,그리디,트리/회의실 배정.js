/**
 * 다시풀어야됨
 * 다시풀어야됨
 * 다시풀어야됨
 * 다시풀어야됨
 * **/

// let input = [[1, 4], [2, 3], [3, 5], [4, 6], [5, 7]];
let input = [[3, 3], [1, 3], [2, 3]];

const sol = input => {
    let sortInput = input.slice()
    sortInput.sort((a, b) => {
        if (a[0] === b[0]) return a[1] - b[1]
        return a[0] - b[0]
    })
    console.log(sortInput)
    let answer = 0
    for (let i = 0; i < sortInput.length; i++) {
        let sum = 0
        let temp
        for (let j = i + 1; j < sortInput.length; j++) {
            temp = sortInput[i]
            if (temp[1] <= sortInput[j][0]) {
                temp = sortInput[j]
                sum++
            }
        }
        if (answer < sum) answer = sum
    }
    return answer
}
console.log(sol(input))
