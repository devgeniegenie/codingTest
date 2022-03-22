const input = 7
const step = [1,2]

const sol = input => {
    let answer = 0
    let temp = Array.from({length:input+1}, () => 0)
    temp[1] = 1
    temp[2] = 2
    for(let i = 3; i <= input; i++){
        temp[i] = temp[i-1] + temp[i-2]
    }
    answer += temp[6] + temp[7]
    return answer
}

const sol2 = input => {
    let answer = 0
    let temp = Array.from({length:input+2}, () => 0)
    temp[1] = 1
    temp[2] = 2
    for(let i = 3; i <= input + 1; i++){
        temp[i] = temp[i-1] + temp[i-2]
    }
    answer = temp[input+1]
    return answer
}
console.log(sol2(input))
