const sol = n => {
    let answer = []
    let queue = []
    queue.push(1)
    while(queue.length){
        let v = queue.shift()
        answer.push(v)
        for(let x of [v*2, v*2+1]){
            if(x > 7) continue
            queue.push(x)
        }
    }
    console.log(answer)
}
sol(7)