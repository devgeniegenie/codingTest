const input = [120, 125, 152, 130, 135, 135, 143, 127, 160]
// const input = [120, 130, 150, 150, 130, 150]

const sol = input => {
    let answer = []
    let sortedinput = input.slice()
    sortedinput.sort((a, b) => a - b)
    for (let i = 0; i < input.length; i++) {
        if (input[i] !== sortedinput[i]) answer.push(i + 1)
    }
    return answer
}
console.log(sol(input))
