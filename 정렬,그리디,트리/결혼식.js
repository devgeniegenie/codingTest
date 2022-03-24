let input = [[14, 18], [12, 15], [15, 20], [20, 30], [5, 14]];

const sol = times => {
    let temp = []
    for(let x of times){
        temp.push([x[0], 's'])
        temp.push([x[1], 'e'])
    }
    temp.sort((a,b) => {
        if(a[0] === b[0]) return a[1].charCodeAt() - b[1].charCodeAt()
        else return a[0] - b[0]
    })
    console.log(temp)
    let answer = 0
    let count = 0
    for(let x of temp){
        if(x[1] === 's') count ++
        else count --
        answer = Math.max(answer, count)
    }
    return answer
}
console.log(sol(input))
