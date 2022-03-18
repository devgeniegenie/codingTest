const n = 3
const m = 2

const sol = (n, m) => {
    let answer = []
    let temp = Array.from({length:m})
    const DFS = L => {
        if(L === m){
            answer.push(temp.slice())
        }else{
            for(let i = 1; i <= n; i ++){
                temp[L] = i
                DFS(L+1)
            }
        }
    }
    DFS(0)
    return answer
}
console.log(sol(n,m))
