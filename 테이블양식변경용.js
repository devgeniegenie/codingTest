//인수인계문서작성중 테이블명세서 양식이 바뀌는 일이 생겨 기존데이터를 가공할 일이 생김

const input =
    `bigint\tUnchecked
nvarchar(100)\tChecked
date\tChecked
date\tChecked
nvarchar(4)\tChecked
nvarchar(1)\tUnchecked
\tUnchecked`.replace(/'\t'/, " ").split('\n').map(el => el.replace('\t', '@').split('@'))

const data = []
const nullCheck = []

for(let i = 0; i < input.length; i++){
    data.push(input[i][0])
    nullCheck.push(input[i][1])
}
const dataType = data.map(el => el.split('(')[0]).join('\n').toUpperCase()
const dataLength = data.map(el => el.replace(')','').split('(')[1]).join('\n')
const nullCheckResult = nullCheck.map(el => el === 'Unchecked' ? 'N' : 'Y').join('\n')
//성능 상관없어서 그냥 한줄씩출력
console.log(dataType)
console.log('---------------------------------------------------------------')
console.log(dataLength)
console.log('---------------------------------------------------------------')
console.log(nullCheckResult.substring(0, nullCheckResult.length-1))
