const sol = str => {
    let uppercase = str.toUpperCase()
    let reverseUppercase = uppercase.split('').reverse().join('')
    return uppercase === reverseUppercase ? 'YES' : 'NO'
}
const sol2 = str => {
    let uppercase = str.toUpperCase()
    let len = uppercase.length
    for(let i = 0; i < Math.floor(uppercase.length / 2); i++){
        if(uppercase[i] !== uppercase[len-i -1]) return 'NO'
    }
    return 'YES'
}
const input = 'gooG'

console.log(sol(input))
console.log(sol2(input))
