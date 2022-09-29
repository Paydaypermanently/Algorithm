//https://www.acmicpc.net/problem/2839

function getLeastBag(sugar) {
    const bag1 = Math.floor(sugar / 5);
    if (bag1 < 1) return -1;

    const leftOverSugar = sugar - bag1 * 5;
    if (leftOverSugar < 3) return leftOverSugar + 1;
    const bag2 = Math.floor(leftOverSugar / 3);

    return bag2 >= 1 ? bag1 + bag2 : -1;
}

const result = getLeastBag(6);
console.log(result);