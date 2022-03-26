const arr = [23, 87, 65, 12, 57, 32, 99, 81]
const num = 32

const sol = (arr, num) => {
    let sortArray = arr.slice()
    sortArray.sort((a, b) => a - b)

    let answer
    let lt = 0, rt = arr.length - 1
    let mid = Math.floor((lt + rt) / 2)
    while (true) {
        if (sortArray[mid] === num) {
            answer = mid + 1
            break
        }
        if (sortArray[mid] > num) {
            rt = mid - 1
            mid = Math.floor((lt + rt) / 2)
        } else {
            lt = mid + 1
            mid = Math.floor((lt + rt) / 2)
        }
    }
    return answer
}
console.log(sol(arr, num))
