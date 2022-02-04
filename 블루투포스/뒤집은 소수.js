const checkPrimeNumber = (num) => {
    if(num < 2) return false
    for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++){
        if(num%i === 0) return false
    }
    return true
}

const sol = (inputArray) => {
    let reverseInputArray = inputArray.reduce((pre,curr)=> {
        const reverseNumber = Number(curr.toString().split('').reverse().join(''))
        if(checkPrimeNumber(reverseNumber)){
            pre.push(reverseNumber)
        }
        return pre
    },[])
    return reverseInputArray
}

let inputArray=[32, 55, 62, 20, 250, 370, 200, 30, 100];

console.log(sol(inputArray))
