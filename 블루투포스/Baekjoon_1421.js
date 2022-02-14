/**
 * https://www.acmicpc.net/problem/1421
 * 실버2
 **/

const fs = require("fs");
const [input, ...arr] = (process.platform === "linux"
        ? fs.readFileSync("/dev/stdin").toString()
        : `3 10 10
26
103
59`
)
    .trim()
    .split("\n");

// let input = parseInt((arr[0]).split(' ')[0]);
// let input = arr[0].split(' ').map(x=> Number(x));
// let input = Number((arr[0]).split(' ')[0]);

let n = input.split(' ').map(el => Number(el))[0]
let c = input.split(' ').map(el => Number(el))[1]
let w = input.split(' ').map(el => Number(el))[2]
let stickLengthArray = arr.map(el => Number(el))

//1부터 가장 긴 막대기 길이만큼 잘라서 수입이 최대인 값 찾음
let maxStickLength = Math.max(...stickLengthArray)

let result = 0
for (let i = 1; i <= maxStickLength; i++) {
    let sum = 0
    for (let j = 0; j < n; j++) {
        if(stickLengthArray[j] >= i){
            let pieceCount = Math.floor(stickLengthArray[j] / i)
            let divCount = 0
            if(stickLengthArray[j] % i  === 0){
                divCount = stickLengthArray[j] / i - 1
            } else {
                divCount = Math.floor(stickLengthArray[j] / i)
            }
            if(pieceCount * w * i - divCount * c > 0){
                sum +=pieceCount * w * i - divCount * c
            }
        }
    }
    result < sum ? result = sum : null
}
console.log(result)
