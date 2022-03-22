let move = [1, -1, 5]
let s = 5
let cow = 14
const sol = (s, cow) => {
    let answer = 0
    let check = Array.from({length : 10001}, () => 0)
    let queue = []
    queue.push(s)
    while(queue.length){
        let length = queue.length
        for(let i = 0; i < length; i++){
            let x = queue.shift()
            for(let nx of [x-1, x+1, x+5]){
                if(nx === cow) return answer + 1
                if(nx >0 && nx <=10000 && check[nx] === 0){
                    check[nx] = 1
                    queue.push(nx)
                }
            }
        }
        answer ++
    }
}
console.log(sol(s, cow))
