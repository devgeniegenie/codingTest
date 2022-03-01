const sol = (s, t) => {
    let result = []
    let p = 10000
    for(let i = 0; i < s.length; i++){
        if(s[i] === t){
            p = 0
            result.push(p)
        } else {
            p++
            result.push(p)
        }
    }
    p = 10000
    for(let i = s.length - 1; i >= 0; i--){
        if(s[i] === t){
            p = 0
        } else {
            p++
            result[i] = Math.min(result[i], p)
        }
    }
    console.log(...result)
}

const s = 'teachermode'
const t = 'e'
sol(s, t)
