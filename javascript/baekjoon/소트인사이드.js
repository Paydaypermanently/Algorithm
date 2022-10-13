//https://www.acmicpc.net/problem/1427

function Solution(n) {
    console.log(n);
    const strNumber = String(n);
    const number = strNumber.split(""); // 배열 ['h', 'e', 'l', 'l', 'o']

    console.log(number);
    console.log(number.sort((a, b) => b - a).join(""));
}

Solution(2143);