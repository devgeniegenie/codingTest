const n = 33
const r = 19

const sol = (n, r) => {
    let length = n+1
    let memo = Array.from(Array(length), () => Array(length))
    const DFS = (n, r) => {
        if(memo[n][r] !== undefined) return memo[n][r]
        if(n ===r || r === 0){
            return 1
        }else{
           return memo[n][r] = DFS(n-1, r-1) + DFS(n-1, r)
        }
    }
    return DFS(n, r)
}
console.log(sol(n,r))
