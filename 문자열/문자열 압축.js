const sol = (input) => {
    let result = ''
    let count = 0
    let temp = input[0]
    for(let i = 0; i <= input.length; i++){
        if(temp === input[i]) {
            count++
        } else {
            result += temp
            if(count > 1) result += count
            count = 1
            temp = input[i]
        }
    }
    console.log(result)

}
const input = 'KKHSSSSSSSE'
sol(input)
