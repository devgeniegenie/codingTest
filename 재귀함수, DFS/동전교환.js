let input = [1, 2, 5]
let number = 15
const sol = (m, arr) => {
    let answer = Number.MAX_SAFE_INTEGER

    const DFS = (L, sum) => {
        if(sum> m) return
        if(L >= answer) return
        if(sum === m){
            answer = Math.min(answer, L)
        }else{
            for(let i=0; i < arr.length; i++){
                DFS(L+1, sum+arr[i])
            }
        }
    }
    DFS(0,0)
    return answer
}
console.log(sol(number, input))