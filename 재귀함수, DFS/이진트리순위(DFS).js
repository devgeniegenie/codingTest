const sol = (input) => {
    let length = input
    const DFS = (n) => {
        if(n > length){

        }else{
            //전위 : console.log(n)
            DFS(n*2)
            //중위 : console.log(n)
            DFS(n*2 + 1)
            //후위 : console.log(n)
        }
    }
    DFS(1)
}
sol(7)
