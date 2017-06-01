var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

// Write a sorting function (sometimes called a custom comparator),
// that sorts the above array first by the name ascending alphabetically,
// and in cases where the names are equal sort by descending age.

function customComparator (a,b) {
  // sort alpahbetically by name ignoring uppercases
  var nameA = a.name.toUpperCase();
  var nameB = b.name.toUpperCase();
  if(nameA < nameB) {
    return -1
  } if (nameA > nameB) {
    return 1;
  } else {
  return b.age - a.age;
}
}

 var result = students.sort(customComparator);
 console.log(result);


// var numbers = [1, 5, 2, 9, 10];

// var result = least - greatest;


// console.log(numbers.sort(function(least, greatest) {
//   var result = least - greatest;
//   console.log(result);
//   return result
//   // return least - greatest;
// }));

// // // var numbers = [4, 2, 5, 1, 3];
// // // numbers.sort(function(a, b) {
// // //   return b - a;
// // // });
// // // console.log(numbers);

// // // // [1, 2, 3, 4, 5]

// // var items = [
// //   { name: 'Edward', value: 21 },
// //   { name: 'Sharpe', value: 37 },
// //   { name: 'And', value: 45 },
// //   { name: 'The', value: -12 },
// //   { name: 'Magnetic', value: 13 },
// //   { name: 'Zeros', value: 37 }
// // ];

// // // // sort by value
// // // var result = items.sort(function (a, b) {
// // //   return a.value - b.value;
// // // });

// // // console.log(result);

// // // // sort by name
// // var result = items.sort(function(a, b) {
// //   var nameA = a.name.toUpperCase(); // ignore upper and lowercase
// //   var nameB = b.name.toUpperCase(); // ignore upper and lowercase
// //   if (nameA < nameB) {
// //     return -1;
// //   }
// //   if (nameA > nameB) {
// //     return 1;
// //   }

// //   // names must be equal
// //   return 0;
// // });

// // console.log(result);

// var stringArray = ['Blue', 'Humpback', 'Beluga'];
// var numericStringArray = ['80', '9', '700'];
// var numberArray = [40, 1, 5, 200];
// var mixedNumericArray = ['80', '9', '700', 40, 1, 5, 200];

// function compareNumbers(a, b) {
//   return a - b;
// }

// console.log('stringArray:', stringArray.join());
// console.log('Sorted:', stringArray.sort());

// console.log('numberArray:', numberArray.join());
// console.log('Sorted without a compare function:', numberArray.sort());
// console.log('Sorted with compareNumbers:', numberArray.sort(compareNumbers));

// console.log('numericStringArray:', numericStringArray.join());
// console.log('Sorted without a compare function:', numericStringArray.sort());
// console.log('Sorted with compareNumbers:', numericStringArray.sort(compareNumbers));

// console.log('mixedNumericArray:', mixedNumericArray.join());
// console.log('Sorted without a compare function:', mixedNumericArray.sort());
// console.log('Sorted with compareNumbers:', mixedNumericArray.sort(compareNumbers));

