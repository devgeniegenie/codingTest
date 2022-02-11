/**
 * https://www.acmicpc.net/problem/1198
 * 실버3
 **/

const fs = require("fs");
const [n, ...arr] = (process.platform === "linux"
        ? fs.readFileSync("/dev/stdin").toString()
        : `4
1 1
1 2
3 3
2 1`
)
    .trim()
    .split("\n");

// let input = parseInt((arr[0]).split(' ')[0]);
// let input = arr[0].split(' ').map(x=> Number(x));
// let input = Number((arr[0]).split(' ')[0]);

let input = arr//[0].split(' ').map(x=> Number(x));

console.log(input.map(el => el.split(' ')))
