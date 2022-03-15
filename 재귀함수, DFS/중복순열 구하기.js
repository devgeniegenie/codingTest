const n = 3
const m = 2

const sol = () => {
    let count = 0
    for(let i = 1; i <= n; i++){
        for(let j =1 ; j <= n; j++){
            console.log(i, j)
            count++
        }
    }
    console.log(count)
}
// sol()

const sol2 = (n, m) => {
    let answer = []
    let temp = Array.from({length : m}, () => 0)
    const DFS = (L) => {
        if(L === m){
            answer.push(temp.slice())
        }else{
            for(let i = 1; i <= n; i++){
                temp[L] = i
                DFS(L+1)
            }
        }
    }
    DFS(0)
    return answer
}
console.log(sol2(n,m))