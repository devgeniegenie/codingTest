const sol = input => {
    let result = []

    let checkArray = Array.from({length: input+1}, ()=>0);
    const DFS = n => {
        if(n === input + 1){
            let temp = ''
            for(let i = 1; i <= input; i++){
                if(checkArray[i] === 1) temp += i + ' '
            }
            if(temp !== '') result.push(temp.trim())
        }else{
            checkArray[n] = 1
            DFS(n+1)
            checkArray[n] = 0
            DFS(n+1)
        }
    }
    DFS(1)
    console.log(result)
}
sol(3)
