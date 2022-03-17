const n = 4
const m = 2

const sol = (n, m) => {

    let answer = []
    let temp = Array.from({length : m})
    const DFS = (L, num) => {
        if(L === m){
            answer.push(temp.slice())
        }else{
            for(let i = num; i <= n; i++){
                temp[L] = i
                DFS(L+1, i+1)
            }
        }
    }
    DFS(0, 1)
    return answer
}
console.log(sol(n,m))