let arr = [[1, 2], [1, 3], [1, 4], [2, 1], [2, 3], [2, 5], [3, 4], [4, 2], [4, 5]];
let n = 5
let m = 9
const sol = (n, m, arr) => {
    let answer = 0
    let graph = Array.from({length: n + 1}, () => Array(n + 1).fill(0))
    let check = Array.from({length: n + 1}, () => 0)
    let path = []
    for(let [a,b] of arr){
        graph[a][b] = 1
    }

    const DFS = (v) => {
        if (v === n) {
            answer++
            console.log(path.slice())
        } else {
            // for(let i = 1; i <= n; i++){
            for(let i = 2; i <= n; i++){
                if(check[i] === 0 && graph[v][i] === 1){
                    check[i] = 1
                    path.push(i)
                    DFS(i)
                    path.pop()
                    check[i] = 0
                }
            }
        }
    }
    /*check[1] = 1
    path.push(1)*/
    DFS(1)
    console.log(answer)
}
sol(n,m,arr)