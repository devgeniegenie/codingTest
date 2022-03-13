let input=[81, 58, 42, 33, 61];
let limit = 259;

const sol = (limit, inputArr) => {

    let answer = Number.MIN_SAFE_INTEGER
    const DFS = (level, sum) => {
        if(limit < sum) return
        if(inputArr.length === level){
            if(answer < sum) answer = sum
            // answer = Math.max(answer, sum)
        }else{
            DFS(level + 1, sum + inputArr[level])
            DFS(level + 1, sum)
        }
    }
    DFS(0, 0)
    return answer
}
console.log(sol(limit, input))
