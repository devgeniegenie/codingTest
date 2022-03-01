const sol = n => {
    let result = ''
    const dfs = n => {
        if (n === 1) {
            result += String(1)
        } else {
            dfs(Math.floor(n / 2))
            result += String(n % 2)
        }
    }
    dfs(n)
    return result
}
const input = 13
console.log(sol(input))
