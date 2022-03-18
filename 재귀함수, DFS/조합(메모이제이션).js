const n = 33
const r = 19

const sol = (n, r) => {
    let memo = Array.from({length : n + 1}, () => Array.from({length : r+1}))
    const DFS = (n, r) => {
        if(memo[n][r]) return memo[n][r]
        if(r === n || r ===0){
            return 1
        }else{
            memo[n][r] = DFS(n-1, r-1) + DFS(n-1, r)
            return memo[n][r]
        }
    }
    return DFS(n, r)
}
console.log(sol(n,r))
