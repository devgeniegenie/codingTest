let input = [1, 3, 5, 6, 7, 10]

const sol = input => {
    let result = 'NO'
    let tempArr = new Array(input).fill(1)
    const DFS = n => {
        if(result === 'YES') return
        if(input.length === n){
            let temp1 = []
            let temp2 = []
            for(let i = 0; i < input.length; i++){
                if(tempArr[i] === 1) temp1.push(input[i])
                else temp2.push(input[i])
            }
            let temp1Sum = temp1.reduce((pre,curr,index) =>pre + curr,0)
            let temp2Sum = temp2.reduce((pre,curr,index) =>pre + curr,0)
            if(temp1Sum === temp2Sum) result = 'YES'; return
        }else{
            tempArr[n] = 1
            DFS(n+1)
            tempArr[n] = 0
            DFS(n+1)
        }
    }
    DFS(0)
    return result
}
console.log(sol(input))

const sol2 = input => {
    let result = 'NO'
    let inputSum = input.reduce((pre, curr, index ) => pre + curr, 0)
    const DFS = (level, sum) => {
        if(result === 'YES') return
        if(input.length === level){
            if(inputSum - sum === sum) result = 'YES'
        }else{
            DFS(level + 1, sum + input[level])
            DFS(level + 1, sum)
        }
    }
    DFS(0,0)
    return result
}
console.log(sol2(input))