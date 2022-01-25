/**
 * 2019 카카오 개발자 겨울 인턴십 크레인 인형뽑기 게임 문제
 * https://programmers.co.kr/learn/courses/30/lessons/64061
 **/

const solution = (board, moves) => {
    let stack = [];
    let result = 0;
    for (const move of moves) {
        let index = move - 1
        for (let i = 0; i < board.length; i++) {
            if (board[i][index] !== 0) {
                let temp = board[i][index]
                board[i][index] = 0
                if (stack[stack.length - 1] === temp) {
                    stack.pop()
                    result += 2
                } else {
                    stack.push(temp)
                }
                break
            }
        }
    }
    return result
}

let board = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1]
];
let moves = [1, 5, 3, 5, 1, 2, 1, 4];

console.log(solution(board, moves))
