/**
 * https://www.acmicpc.net/problem/1057
 * 실버3
 **/

const fs = require("fs");
const [n, ...arr] = (process.platform === "linux"
        ? fs.readFileSync("/dev/stdin").toString()
        : `65536 1000 35000`
)
    .trim()
    .split("\n");

// let input = parseInt((arr[0]).split(' ')[0]);
// let input = arr[0].split(' ').map(x=> Number(x));
// let input = Number((arr[0]).split(' ')[0]);

let memberNumber = n.split(' ').map(x => Number(x))[0];
const input1 = n.split(' ').map(x => Number(x))[1];
const input2 = n.split(' ').map(x => Number(x))[2];

let kim = input1
let lim = input2

let result = 0

while(kim != lim){
    kim = Math.ceil(kim-kim/2)
    lim = Math.ceil(lim-lim/2)
    result ++
}
console.log(result)
