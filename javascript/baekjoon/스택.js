// https://www.acmicpc.net/problem/10828
const Stack = [];
const StackFuncs = {
    push: (num) => {
        Stack.push(num);
    },
    pop: () => {
        if (Stack.length === 0) {
            console.log(-1);
        } else {
            const topNum = Stack[Stack.length - 1];
            Stack.splice(Stack.length - 1, Stack.length);
            console.log(topNum);
        }
    },
    size: () => {
        console.log(Stack.length);
    },
    empty: () => {
        if (Stack.length === 0) console.log(1);
        else console.log(0);
    },
    top: () => {
        if (Stack.length === 0) console.log(-1);
        else console.log(Stack[Stack.length - 1]);
    },
};

const commands = [7, "pop", "top", "push 123", "top", "pop", "top", "pop"];

for (let i = 1; i <= commands[0]; i++) {
    switch (commands[i]) {
        case "pop":
            StackFuncs.pop();
            break;
        case "size":
            StackFuncs.size();
            break;
        case "empty":
            StackFuncs.empty();
            break;
        case "top":
            StackFuncs.top();
            break;

        default:
            const pushArr = commands[i].split(" ");
            StackFuncs.push(Number(pushArr[1]));
    }
}