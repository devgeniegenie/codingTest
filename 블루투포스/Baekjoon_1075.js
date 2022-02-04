/**
 * https://www.acmicpc.net/problem/1075
 * 브론즈2
 **/

const fs = require("fs");
const [...arr] = (process.platform === "linux"
        ? fs.readFileSync("/dev/stdin").toString()
        : `32442
99`
)
    .trim()
    .split("\n");

// let input = parseInt((arr[0]).split(' ')[0]);
// let input = arr[0].split(' ').map(x=> Number(x));
// let input = Number((arr[0]).split(' ')[0]);

let inputN = parseInt((arr[0]))//.split(' ')[0]);
let inputF = parseInt((arr[1]))

let transInputN = Math.floor(inputN/100)*100

for(let i = 0; i <= 99; i++){
    if((transInputN % inputF) == 0){
        i >= 10 ? console.log(i) : console.log('0'+i)
        return
    }
    transInputN ++
}
