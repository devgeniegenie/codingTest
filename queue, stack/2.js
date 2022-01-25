/**
 * 후위식연산
 * 후위식연산 ? : https://siyoon210.tistory.com/2
 **/

const postfix = input => {
    let stack = []
    for(const el of input){
        if(!isNaN(el)) {
            stack.push(Number(el))
        } else {
            let number1 = stack.pop(), number2 = stack.pop()
            if(el === '+') stack.push(number1 + number2)
            else if(el === '-') stack.push(number2 - number1)
            else if(el === '*') stack.push(number1 * number2)
            else if(el === '/') stack.push(number1 / number2)
        }
    }
    const result = stack[0]
    return result
}

let input = '352+*9-'

console.log(postfix(input))
