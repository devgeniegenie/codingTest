/**
 * 작성중
 * */

const arr = [23, 87, 65, 12, 57, 32, 99, 81]
const num = 32

const sol = (arr, num) => {
    let sortArray = arr.slice()
    sortArray.sort((a,b) => a-b)
    console.log(sortArray)


}
sol(arr,num)
