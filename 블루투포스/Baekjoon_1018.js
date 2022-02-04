/**
 * https://www.acmicpc.net/problem/1018
 * 실버5
 **/

const fs = require("fs");
const [n, ...arr] = (process.platform === "linux"
        ? fs.readFileSync("/dev/stdin").toString()
        : `9 23
BBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBW`
)
    .trim()
    .split("\n");

// let input = parseInt((arr[0]).split(' ')[0]);
// let input = arr[0].split(' ').map(x=> Number(x));
// let input = Number((arr[0]).split(' ')[0]);

let inputY = n.split(' ')[0];
let inputX = n.split(' ')[1];

const colorTypes = ['WBWBWBWB','BWBWBWBW']

let result = []
for (let i = 0; i <= inputY - 8; i++) {
    for (let j = 0; j <= inputX - 8; j++) {
        //왼쪽 구석 두가지 색
        for (let k = 0; k < 2; k++) {
            let count = 0
            for (let x = i; x < i+8; x++) {
                for (let y = j; y < j+8; y++) {
                    //
                    if(arr[x][y] !== colorTypes[(x+k)%2][y-j]) count++
                }
            }
            result.push(count)
        }
    }
}
console.log(Math.min(...result))
