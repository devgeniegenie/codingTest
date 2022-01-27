const sol = (necessary, arr) => {
    let necessaryArr = necessary.split('')
    for(const el of arr){
        if(necessaryArr.includes(el)){
            if(necessaryArr.shift() !== el) return 'NO'
        }
    }
    return necessaryArr.length === 0 ? 'YES' : 'NO'
}

const input1 = 'CBA'
const input2 = 'CBDAGE'

console.log(sol(input1, input2))

//처음에 짠 코드 : 일단 배열 무조건 만들고 나중에 비교해서 안좋아보임
const sol2 = (necessary, arr) => {
    let stack = [];
    for(const el of arr){
        if(necessary.includes(el)){
            stack.push(el)
        }
    }
    let result = stack.join('')
    return result === necessary ? 'YES' : 'NO'
}
