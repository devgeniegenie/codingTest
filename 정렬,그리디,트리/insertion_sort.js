/**
 * 삽입정렬 : https://ko.wikipedia.org/wiki/%EC%82%BD%EC%9E%85_%EC%A0%95%EB%A0%AC
 **/

const inputArr = [1, 9, 6, 8, 4, 3, 2, 0]

const insertionSort = arr => {
    for (let i = 1; i < arr.length; i++) {
        for (let j = i; j > 0; j--) {
            if (arr[j-1] > arr[j]) [arr[j-1], arr[j]] = [arr[j], arr[j-1]]
        }
    }
    return arr
}

const insertionSort2 = arr => {
    for(let i = 1; i < arr.length; i++){
        let j = i
        while(arr[j-1] > arr[j]){
            [arr[j], arr[j-1]] = [arr[j-1], arr[j]]
            j--
        }
    }
    return arr
}
console.log(insertionSort(inputArr))
