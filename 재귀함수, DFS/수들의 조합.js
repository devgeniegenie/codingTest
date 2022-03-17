const n = 5
const m = 3
const arr = [2, 4, 5, 8, 12]
const checkNum = 6

const sol = (n, m, arr, checkNum) => {
    let answer = 0
    const DFS = (L, num, sum) => {
        if (L === m) {
            if (sum % checkNum === 0) answer++
        } else {
            for (let i = num; i < n; i++) {
                DFS(L + 1, i + 1, sum + arr[i])
            }
        }
    }
    DFS(0, 0, 0)
    return answer
}

console.log(sol(n, m, arr, checkNum))