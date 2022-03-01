const sol = n => {
    if(n === 1){
        console.log(n)
    } else {
        sol(n-1)
        console.log(n)
    }
}
const input = 3
sol(input)
