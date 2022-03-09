const first = () => 89;
// console.log(first());

const second = num => num / 7;
// console.log(second(56));

const third = (num1, num2) => (num1 + num2) / 2;
// console.log(third(56, 44));

const fourth = (num1, num2) => {
    const add1 = num1 + 7;
    const add2 = num2 + 7;
    const total = add1 + add2;
    return total;
}
console.log(fourth(56, 34));