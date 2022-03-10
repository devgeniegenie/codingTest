/**
 * https://www.acmicpc.net/problem/1544
 * 실버4
 **/

const fs = require("fs");
const [n, ...arr] = (process.platform === "linux"
        ? fs.readFileSync("/dev/stdin").toString()
        : `5
aaaa
aaa
aa
aaaa
aaaaa`
)
    .trim()
    .split("\n");

// let input = parseInt((arr[0]).split(' ')[0]);
// let input = arr[0].split(' ').map(x=> Number(x));
// let input = Number((arr[0]).split(' ')[0]);

let tempArray = arr.map(e => e+e)
let copyArr = arr.map(e => e)
let count = 1
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (copyArr[i].length * 2 === tempArray[j].length && tempArray[j].includes(copyArr[i])) {
            tempArray[j] = count
        }
    }
    count++
}
console.log(new Set(tempArray).size)
