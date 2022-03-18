const m = 2
const input = [3, 6, 9]

const sol = (m, input) => {
    let answer = []
    let temp = Array.from({length : m})
    let check = Array.from({length : input.length}, () => true)
    const DFS = (L) => {
        if(L === m){
            answer.push(temp.slice())
        }else{
            for(let i = 0; i < input.length; i++){
                if(check[i]){
                    check[i] = false
                    temp[L] = input[i]
                    DFS(L+1)
                    check[i] = true
                }
            }
        }
    }
    DFS(0)
    return answer
}
console.log(sol(m,input))
