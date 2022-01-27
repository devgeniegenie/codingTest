/**
* 선택정렬 : https://ko.wikipedia.org/wiki/%EC%84%A0%ED%83%9D_%EC%A0%95%EB%A0%AC
* 1. 주어진 리스트 중에 최소값을 찾는다.
* 2. 그 값을 맨 앞에 위치한 값과 교체한다(패스(pass)).
* 3. 맨 처음 위치를 뺀 나머지 리스트를 같은 방법으로 교체한다.
**/

const selection_sort = (arr) => {
    let result = arr
    for (let i = 0; i < arr.length - 1; i++) {
        let idx = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[idx] > arr[j]) {
                idx = j
            }
        }
        /*let temp
        temp = arr[i]
        arr[i] = arr[idx]
        arr[idx] = temp*/
        [arr[i], arr[idx]] = [arr[idx], arr[i]]
    }
    return result
}
console.log(selection_sort([9, 1, 6, 8, 4, 3, 2, 0]))
