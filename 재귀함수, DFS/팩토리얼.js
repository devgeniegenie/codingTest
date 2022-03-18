const n = 3

const sol = (n) => {
    const Factorial = L => {
        if(L === 1) return 1
        else{
            return L*Factorial(L-1)
        }
    }
    let answer = Factorial(n)
    return answer
}
console.log(sol(n))
