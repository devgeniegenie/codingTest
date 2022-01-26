/**
 * 공주구하기
 * https://kojoo112.tistory.com/entry/45-%EA%B3%B5%EC%A3%BC-%EA%B5%AC%ED%95%98%EA%B8%B0
 **/

const sol = (member, num) => {
    let memberArray = Array.from({length: member}, (v, index) => index + 1)
    while (memberArray.length > 1) {
        for (let i = 1; i < num; i++) {
            memberArray.push(memberArray.shift())
        }
        memberArray.shift()
    }
    return memberArray[0]
}

const a = 8
const b = 3

console.log(sol(a, b))
