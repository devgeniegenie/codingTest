let input = [1, 2, 5]
let number = 22

const sol1 = (inputPrice, inputArray) => {
    let coin = inputArray.sort((a,b) => b-a)
    let result = 0
    let price = inputPrice
    for(let i = 0; i < coin.length; i++){
        result +=  Math.floor(price/coin[i])
        price = price % coin[i]
    }
    return result
}
console.log(sol1(number, input))

const sol2 = (number,arr) => {
    let answer = Number.MAX_SAFE_INTEGER
    const DFS = (L, sum) => {
        if(sum > number) return
        if(answer <= L) return
        if(sum === number){
            answer = Math.min(L, answer)
        }else{
            for(let i = 0; i < input.length; i++){
                DFS(L+1, sum+arr[i])
            }
        }
    }
    DFS(0,0)
    return answer
}
console.log(sol2(number, input))

