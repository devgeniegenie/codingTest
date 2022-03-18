const n = 4
const m = 2

const sol = (n,m) =>{
    let answer = []
    let temp = []
    const Combination = (L, x) => {
        if(L === m){
            answer.push(temp.slice())
        }else{
            for(let i = x ; i <= n; i++){
                temp.push(i)
                Combination(L+1, i+1)
                temp.pop()
            }
        }
    }
    Combination(0, 1)
    return answer
}
console.log(sol(n,m))
