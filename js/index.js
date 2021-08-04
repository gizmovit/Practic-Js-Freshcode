function sayType(first) {
    if(typeof first === "number") {
        return "это число";
    }
    if (typeof first === "string") {
        return "это строка";
    }
    return "незнаю";
}
console.log(sayType);


function randNum(max) {
    return Math.random() * max;
}

console.log(randNum);

let stars7 = ''
for(let i = 0; i < 7; i++) {
    stars7 = stars7 + '*';
}
console.log(stars7);


let sav = '';
const top = 4

for(let j = 0; j <top; j++) {
    for(let i = 0; i < top; i++) {
        top += '*';
    }
    top += '\n'
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < array.length; i++) {
    if (i % 2 === 1) {
        array.splice(i, 1);
    }
}
console.log(array);
