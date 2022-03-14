let point=[10, 25, 15, 6, 7];
let time=[5, 12, 8, 3, 4]
let timeLimit = 20

const sol = (inputTime, inputPoint) => {

    let length = inputTime.length
    let maxPoint = Number.MIN_SAFE_INTEGER
    const DFS = (n, time, sum) => {
        if(time > timeLimit) return
        if(n === length){
            maxPoint = Math.max(maxPoint, sum)
        }else{
            DFS(n+1, time + inputTime[n]  ,sum+inputPoint[n])
            DFS(n+1, time  ,sum)
        }
    }
    DFS(0, 0, 0)
    return maxPoint
}
console.log(sol(time, point))