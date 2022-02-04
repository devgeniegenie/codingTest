/**
 * https://www.acmicpc.net/problem/1145
 * 브론즈1
 **/

const fs = require("fs");
const [...arr] = (process.platform === "linux"
        ? fs.readFileSync("/dev/stdin").toString()
        : `1 2 3 4 5`
)
    .trim()
    .split("\n");

// let input = parseInt((arr[0]).split(' ')[0]);
// let input = arr[0].split(' ').map(x=> Number(x));
// let input = Number((arr[0]).split(' ')[0]);

let input = arr[0].split(' ').map(x=> Number(x));

let answer = 1
while(true){
    let checkNumber = 0
    for(let i = 0; i < input.length; i++){
        if(answer % input[i] === 0) checkNumber ++
    }
    if(checkNumber>= 3) break
    answer ++
}
console.log(answer)
