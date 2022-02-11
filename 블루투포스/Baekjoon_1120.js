/**
 * https://www.acmicpc.net/problem/1120
 * 실버4
 **/

const fs = require("fs");
const [n] = (process.platform === "linux"
        ? fs.readFileSync("/dev/stdin").toString()
        : `giorgi igroig`
)
    .trim()
    .split("\n");

// let input = parseInt((arr[0]).split(' ')[0]);
// let input = arr[0].split(' ').map(x=> Number(x));
// let input = Number((arr[0]).split(' ')[0]);

// sol 1 : 배열에 임의의 원소(0)을 넣어 길이를 맞춘후 비교했음
let input1 = n.split(' ')[0].split('')
let input2 = n.split(' ')[1].split('')
let input1Length = input1.length

for(let i = 0; i < (input2.length - input1Length); i++){
    input1.push(0)
}
let max = 0
while(true){
    let count = 0
    for(let i = 0; i < input1.length; i++){
        if(input1[i] === input2[i]) {
            count++
        }
    }
    if(max < count) max = count
    if(input1.pop() != 0 ) {
        break
    }
    input1.unshift(0)
}
console.log(input1Length - max)

//sol 2 : 인덱스를 올려서 비교
let input1 = n.split(' ')[0].split('')
let input2 = n.split(' ')[1].split('')

let result = 0
for(let i = 0; i <= input2.length - input1.length; i++){
    let count = 0
    for(let j = 0; j < input1.length; j++){
        if(input1[j] === input2[j+i]){
            count ++
        }
    }
    if(count > result) result = count
}
console.log(input1.length - result)
