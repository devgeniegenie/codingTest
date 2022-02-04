/**
 * LRU (카카오 캐시문제 변형)
 * https://m.blog.naver.com/yyj9301/222004086549
 **/

//내가 작성한 코드
const LRU = (memorySize, arr) => {
    //순서대로 작업내역을 메모리에 추가
    //메모리 사이즈 넘으면 기존작업 뒤로 밀고 맨앞에 작업 추가
    //(메모리 사이즈 정해져있어서 마지막작업 삭제하고 추가하는 식으로)
    //같은작업이 들어오면 맨앞으로 순서 변경시킴

    let result =[];

    for(let i = 0; i < arr.length; i++){
        if(result.length === memorySize){
            result.pop()
        }
        if(result.includes(arr[i])){
            result = result.filter(el => el !== arr[i])
            result.unshift(arr[i])
        } else {
            result.unshift(arr[i])
        }
        console.log(`${i + 1}회차 : ${result}`)
    }
    return result;
}

//sol
const sol = (memorySize, arr) => {

}

const memorySize = 5
const inputArr = [1, 2, 3, 2, 6, 2, 3, 5, 7]

console.log(LRU(memorySize, inputArr))
