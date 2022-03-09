const numbers = [7, 14, 21, 28, 77, 84, 91, 98];
const division = numbers.map(number => number / 7);
// console.log(numbers);

numbers.forEach(number => {
    // console.log(number / 7);
});


const result = numbers.filter(number => number % 2 == 0);
// console.log(result);

const firstEven = numbers.find(num => num % 2 == 0);
console.log(firstEven);