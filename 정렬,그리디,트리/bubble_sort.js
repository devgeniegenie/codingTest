/**
 * 거품정렬 : https://ko.wikipedia.org/wiki/%EA%B1%B0%ED%92%88_%EC%A0%95%EB%A0%AC
 **/

const bubble_sort = (arr) => {
    let result = arr
    for(let i = 0; i < arr.length - 1; i++){
        for(let j = 0; j < arr.length - 1 - i; j++){
            if(arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }
    console.log(result)
}
bubble_sort([9, 1, 6, 8, 4, 3, 2, 0])
