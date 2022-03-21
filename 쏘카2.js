const k = 3
const input =
    [3, 7, 2, 8, 6, 4, 5, 1]

const checkK = (input, k) => {
    let answer = true
    for(let i = 1; i < input.length; i++){
        if(Math.abs(input[i] - input[i - 1]) > k) answer = false
    }
    return answer
}

const sortArray = (numbers, arr) => {
    let result = 0
    for(let i = 0; i < numbers.length / 2; i++){
        if(numbers[i] !== arr[i]){
            let temp = arr[i]
            arr[i] = numbers[i]
            let index = arr.findIndex(el => el === numbers[i])
            arr[index] = temp
            result ++
        }
    }
    return result

}

const sol = (members, k) => {
    let length = members.length
    let temp = Array.from({length : length})
    let check = Array.from({length : length}, () => true)
    let arrays = []
    const DFS = (L) => {
        if(L === length){
            arrays.push(temp.slice())
        }else{
            for(let i = 0; i < length; i++){
                if(check[i]){
                    check[i] = false
                    temp[L] = members[i]
                    DFS(L+1)
                    check[i] = true
                }
            }
        }
    }
    DFS(0)

    let answer = Number.MAX_SAFE_INTEGER
    for(let i = 0; i < arrays.length; i++){
        if(checkK(arrays[i], k)){
            answer = Math.min(sortArray(members, arrays[i]), answer)
        }
    }
    return answer

}
console.log(sol(input, k))
