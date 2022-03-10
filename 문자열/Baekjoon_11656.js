/**
 * https://www.acmicpc.net/problem/11656
 * 실버4
 **/

const fs = require("fs");
const [n, ...arr] = (process.platform === "linux"
        ? fs.readFileSync("/dev/stdin").toString()
        : `baekjoon`
)
    .trim()
    .split("\n");

// let input = parseInt((arr[0]).split(' ')[0]);
// let input = arr[0].split(' ').map(x=> Number(x));
// let input = Number((arr[0]).split(' ')[0]);

let resultArray = []
for(let i = 0; i < n.length; i++){
    let result = ''
    result = n.substring(i)
    resultArray.push(result)
}
resultArray.sort()
let answer = ''
for(const x of resultArray){
    answer += x + '\n'
}
console.log(answer)
