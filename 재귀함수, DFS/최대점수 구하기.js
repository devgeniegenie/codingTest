let point=[10, 25, 15, 6, 7];
let time=[5, 12, 8, 3, 4]
let timeLimit = 20

const sol = (point, time, timeLimit) => {
    let answer = Number.MIN_SAFE_INTEGER
    const DFS = (L, timeSum, pointSum) => {
        if(timeLimit < timeSum) return
        if(L === point.length){
            answer = Math.max(answer, pointSum)
        }else{
            DFS(L+1, timeSum+time[L], pointSum + point[L])
            DFS(L+1, timeSum, pointSum)
        }
    }
    DFS(0,0,0)
    return answer
}
console.log(sol(point, time, timeLimit))
