/**
 * 괄호문자제거
 * 입력된 문자열에서 소괄호 ( ) 사이에 존재하는 모든 문자를 제거하고 남은 문자만 출력하는 프로그램 작성
 **/

const solution = s => {
    let stack = [];
    for(const el of s){
        if(el === ')'){
            // pop() 메서드는 배열에서 마지막 요소를 '제거하고(배열 변함)' 그 요소를 반환
            while(stack.pop() !== '(');
        } else {
            stack.push(el)
        }
    }
    return stack.join('')
}

let str="(A(BC)D)EF(G(H)(IJ)K)LM(N)";

console.log(solution(str));
