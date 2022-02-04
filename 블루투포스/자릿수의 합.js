const sol = (inputLength, inputArray) => {
    let sumArr = []
    let sortedInputArray = inputArray.sort((a,b) => b-a)
    for(const el of sortedInputArray){
        const sumEl = el.toString().split('').map(n => Number(n)).reduce((pre, curr) => {return pre+curr}, 0)
        sumArr.push(sumEl)
    }
    const maxNumber = Math.max(...sumArr)
    return sortedInputArray[sumArr.findIndex(el => el === maxNumber)]
}

const sol2 = (inputLength, inputArray) => {
    let answer = ''
    let max = Number.MIN_SAFE_INTEGER
    for(let num of inputArray){
        let sum = 0
        let temp =num
        while(temp){
            sum += temp%10
            temp = Math.floor(temp/10)
        }
        if(sum > max){
            max = sum
            answer = num
        } else if (sum === max){
            if(num > answer) answer = num
        }
    }
    return answer
}

const inputLength = 7
const inputArray = [128, 460, 603, 40, 521, 137, 123]

console.time()
console.log(sol(inputLength, inputArray))
console.log(sol2(inputLength, inputArray))
console.timeEnd()

