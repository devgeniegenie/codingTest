/**
 * https://www.acmicpc.net/problem/17413
 * 실버3
 **/

const fs = require("fs");
const [n, ...arr] = (process.platform === "linux"
        ? fs.readFileSync("/dev/stdin").toString()
        : `<int><max>2147483647<long long><max>9223372036854775807`
)
    .trim()
    .split("\n");

// let input = parseInt((arr[0]).split(' ')[0]);
// let input = arr[0].split(' ').map(x=> Number(x));
// let input = Number((arr[0]).split(' ')[0]);

let inputArray = n.split('')

const sol = inputArray => {
    let tempArr = []
    let tempStr = ''
    let trigger = false
    for(let i = 0; i < inputArray.length; i++){
        if(inputArray[i] === '<'){
            tempArr.push(reverseStr(tempStr))
            tempStr = ''
            trigger = true
            tempArr.push(inputArray[i])
        } else if (trigger && inputArray[i] !== '>') {
            tempArr.push(inputArray[i])
        } else if ( inputArray[i] === '>') {
            trigger = false
            tempArr.push(inputArray[i])
        } else if (!trigger){
            tempStr += inputArray[i];
        }
    }
    tempArr.push(reverseStr(tempStr))
    console.log(tempArr.join(''))
}

const reverseStr = input => {
    let tempArray = input.split(' ')
    let result = ''
    for(let i = 0; i < tempArray.length; i++){
        result += tempArray[i].split('').reverse().join('')
        if(i !== tempArray.length - 1) result += ' '
    }
    return result
}

sol(inputArray)
