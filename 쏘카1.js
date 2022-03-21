let n = 6
let k = 17
let roads = [[5, 4, 6], [5, 2, 5], [0, 4, 2], [2, 3, 3], [1, 2, 7], [0, 1, 3]]

const sol = (n,k,roads) => {
    let result = []
    let graph = Array.from({length: n}, () => Array(n).fill(0))
    for(let [a,b,c] of roads){
        graph[a][b] = c
        graph[b][a] = c
    }

    let check = Array.from({length : n}, () => [])

    const DFS = (L, sum) => {
        if(graph[L].findIndex(el => el !== 0) === -1) return
        if(check[L].filter(el => el == sum).length > 1) return
        if(sum > k) {
            return
        }
        if(sum === k){
            result.push(L)
        }else{
            for(let i = 0; i < n; i++){
                if(i !== L && graph[L][i] !==0){
                    check[i].push(sum+graph[L][i])
                    DFS(i, sum+graph[L][i])
                }
            }
        }
    }
    DFS(0,0)

    let tempSet = new Set(result)
    result = [...tempSet].sort((a,b) => a-b)

    return result.length !== 0 ? result : -1
}
console.log(sol(n,k,roads))