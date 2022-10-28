// https://www.acmicpc.net/problem/1085

function solution(...numbers){
    const [x, y, w, h] = numbers
    const left = x
    const bottom = y
    const right = w-x
    const top = h-y


    const result = Math.min(left, bottom, right, top)

    console.log(result)
}

solution(6,2,10,3)