const beds =  [[4, 1, 200000]]
const tables = [[2, 3, 100000]]
const cost = 10000

const sol = (beds, tables, cost) => {
    let choice = []
    for(let i = 0; i < beds.length; i++){
        for(let j = 0; j < tables.length; j++){
            choice.push([i,j,(beds[i][2] + tables[j][2])])
        }
    }

    const minArea = (h1,h2,w1,w2) => {
        return Math.min(Math.max(h1,h2) * (w1+w2), (h1+h2) * Math.max(w1,w2), Math.max(w1,h2) * (h1+w2), Math.max(h1,w2) * (w1+h2))
    }

    let results = []

    for(let i = 0; i < choice.length; i++){
        let x = choice[i][0], y= choice[i][1]
        let h1 = beds[x][0], w1= beds[x][1]
        let h2 =tables[y][0], w2 = tables[y][1]
        results.push([minArea(h1,h2,w1,w2), beds[x][2] + tables[y][2]])
    }

    let answer = 9999999 //Number.MAX_SAFE_INTEGER 사용안됨
    //하단처럼 풀어서안쓰니까 런타임오류뱉음
    results = results.map(el => el[0]*cost + el[1])
    for(let x of results){
        answer = Math.min(answer, x)
    }
    return answer

}
console.log(sol(beds, tables, cost))