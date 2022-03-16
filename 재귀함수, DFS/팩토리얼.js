const n = 3
const sol = n => {
    let answer = 1
    const DFS = n => {
        if(n === 1){
            return
        }else{
            answer *= n
            DFS(n-1)
        }
    }
    DFS(n)
    return answer
}
console.log(sol(n))
