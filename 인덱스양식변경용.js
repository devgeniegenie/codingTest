let input = `IX_USER_DELIVERY_ADDR__USER_API_ID
PK_USER_DELIVERY_ADDR
USER_API_ID
ID`.split('\n')

let indexName = input.slice(0, input.length/2)
let indexField = input.slice(input.length/2, input.length)

let result = ''

for(let i = 0; i < input.length/2 ; i++){
    result += indexName[i] + ' : ' + indexField[i]
    result += '\n'
}
console.log(result)
