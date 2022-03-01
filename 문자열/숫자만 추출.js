const sol = input => {
    let result = ''
    for(let x of input){
        isNaN(x) ? result += x : ''
    }
    return result
}
const input = 'g0en2T0s8eSoft'
console.log(sol(input))
