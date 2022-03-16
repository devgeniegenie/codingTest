const m = 2
const input = [3, 6, 9]

const sol = (m, input) => {
    let answer = []
    let n = input.length
    let checkArr = Array.from({length: n}, () => 0)
    let temp = Array.from({length: m}, () => 0)
    const DFS = (L) => {
        if (L === 2) {
            answer.push(temp.slice())
        } else {
            for (let i = 0; i < n; i++) {
                if (checkArr[i] === 0) {
                    checkArr[i] = 1
                    temp[L] = input[i]
                    DFS(L+1)
                    checkArr[i]=0
                }
            }
        }
    }
    DFS(0)
    return answer
}
console.log(sol(m, input))
