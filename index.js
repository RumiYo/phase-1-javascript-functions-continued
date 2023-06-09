// code your solution here
function saturdayFun(activity = "roller-skate"){
    const message = `This Saturday, I want to ${activity}!`;
    return message;
}
const mondayWork = function (toDo = "go to the office") {
    const mondayStatement = `This Monday, I will ${toDo}.`;
    return mondayStatement;
}
function wrapAdjective(b = "*"){
    return function (a = "special"){
        return `You are ${b}${a}${b}!`;
    }
}