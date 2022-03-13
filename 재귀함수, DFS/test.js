const sol = (input) => {
    let result = []
    let checkArray = new Array(input+1).fill(1)
    const dfs = n => {
        if(n === input + 1){
            let temp = []
            for(let i = 1; i <= input+1; i++){
                if(checkArray[i] === 1){
                    temp.push(i)
                }
            }
            result.push(temp)
        }else{
            checkArray[n] = 1
            dfs(n+1)
            checkArray[n] = 0
            dfs(n+1)
        }
    }
    dfs(1)
    console.log(result)
}
// sol(4)

const sol2 = input => {

    const DFS = n => {
        if(n > input){
            return
        }else{
            DFS(n*2)
            // console.log(n)
            DFS(n*2 + 1)
        }
    }
    DFS(1)
}
sol2(7)