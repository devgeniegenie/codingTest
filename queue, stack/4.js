/**
 * 쇠막대기 문제
 * https://www.acmicpc.net/problem/10799
 **/

const sol = input => {
    let stack = []
    let result = 0
    for (let i = 0; i < input.length; i++) {
        if (input[i] === '(') stack.push('(')
        else {
            console.log(stack)
            stack.pop()
            if (input[i - 1] === ')') result++;
            else result += stack.length
        }
        console.log(stack)
        console.log(result)
        console.log('--------')
    }
    console.log(result)
}

const input = '()(((()())(())()))(())'

sol(input)
