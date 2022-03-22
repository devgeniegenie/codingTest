const input = 7
const step = [1,2]

const sol = input => {
    let answer = 0
    const DFS = (L, sum) => {
        if(sum > input) return
        if(sum === input){
            answer ++
        }else {
            for(let i = 0; i < step.length; i++){
                DFS(L+1, sum + step[i])
            }
        }
    }
    DFS(0,0)
    return answer
}

const sol2 = input => {
    let answer = 0
    let temp = Array.from({length : input + 1}, () => 0)
    temp[1] = 1
    temp[2] = 2
    for(let i = 3; i <= input; i++){
        temp[i] = temp[i-2] + temp[i-1]
    }
    answer = temp[input]
    return answer
}
console.time()
console.log(sol(input))
console.timeEnd()
console.time()
console.log(sol2(input))
console.timeEnd()

