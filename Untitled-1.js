
let arr33 = [1, 2, 3, 4, 5, 6];
let sum = arr33.reduce((acc, el) => {

if (el % 2 !== 0) {
return acc + el;
} else {
return acc * el;
}
});
console.log("sum:", sum);