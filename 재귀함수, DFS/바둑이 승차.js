let input = [81, 58, 42, 33, 61]
let limit = 259

const sol = (input, limit) => {
    let answer = Number.MIN_SAFE_INTEGER
    const DFS = (L, sum) => {
        if(sum > limit) return
        if(L === input.length){
            answer = Math.max(answer, sum)
        }else{
            DFS(L+1, sum+input[L])
            DFS(L+1, sum)
        }
    }
    DFS(0, 0)
    return answer
}
console.log(sol(input, limit))
