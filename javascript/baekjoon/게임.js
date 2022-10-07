//https://www.acmicpc.net/problem/1072

let left = 1;
let right = 1000000000;
let answer = Infinity;

function solution(x, y) {
    let z = Math.floor((100 * y) / x);
    while (left <= right) {
        let mid = parseInt((left + right) / 2);
        let new_z = Math.floor((100 * (y + mid)) / (x + mid));
        if (z !== new_z) {
            answer = Math.min(answer, mid);
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    if (answer === Infinity) console.log(-1);
    else console.log(answer);
}

solution(100, 80);