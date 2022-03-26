//몇개 패스 안됨. 나중에 문제공개되면 다시도전
let round = [["a", "a", "a", "a"], ["b", "c", "a", "c"], ["b", "a", "d", "c"]]
// let round = [["d", "a", "a", "a"],["c", "a", "a", "a"],["b", "a", "a", "a"]]
//    [ [ 1, 0, 0, 3 ], [ 1, 2, 0, 2 ], [ 1, 0, 3, 2 ] ]

const sol = round => {
    let answer = 0
    let tempRound = round.map(el => {
        return el.map(el => {
            if(el === 'a') return 0
            if(el === 'b') return 1
            if(el === 'c') return 2
            if(el === 'd') return 3
        })
    })
    let temp = Array.from({length : 4}, () => 't')
    let coupleCheck = Array.from({length : 4}, () => 't')
    for(let i = 0; i < tempRound.length; i++){
        //자기자신체크, 전에 커플이였는데 또 선택한거 체크
        for(let j = 0; j < 4; j++){
            if(tempRound[i][j] === j) answer ++
        }
        //임시배열
        for(let j = 0; j < 4; j++){
            temp[j] = tempRound[i][j]
        }
        for(let j = 0; j < 4; j++){
            if(temp[j] === coupleCheck[j]) answer ++
        }
        //커플체크위한 배열 세팅
        for(let j = 0; j < 4; j++){
            if(j == temp[temp[j]] && j != temp[j]){
                coupleCheck[j] = temp[j]
            } else {
                coupleCheck[j] = 't'
            }
        }
        console.log(answer)
    }
    return answer
}
console.log(sol(round))