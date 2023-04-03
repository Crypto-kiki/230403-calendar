// const frutis = ["apple", "banana", "orange", "kiwi", "strawberry"];

// // console.log(frutis);

// // for (i = 0; i < frutis.length; i++) {
// //   console.log(frutis[i]);
// // }

// frutis.map((v, i) => {
//   console.log(`${i + 1}번째 과일: ${v}`);
// });

const array = [1, 2, 3, 4, 8];

console.log(array);

// const squareArray = array.map((v) => {
//   return v * v;
// });
// const squareArray = array.map((v) => v * v);     위에꺼랑 같음.

const squareArray2 = [];
for (let i = 0; i < array.length; i++) {
  squareArray2.push(array[i] * array[i]);
}

// console.log(squareArray);
console.log(squareArray2);
