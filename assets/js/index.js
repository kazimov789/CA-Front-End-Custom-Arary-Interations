//#region Map

// const arr = [1,2,3,4,5,6];

// function myFuntion(el) {
//     return el * 2 ;
// }

// function myMap(array,callback)
// {
//     const arr2 = [];
//     for (let index = 0; index < array.length; index++) {
//         arr2.push(callback(array[index],index,array));
//     }
//     return arr2;
// }
// console.log(myMap(arr,myFuntion));

//#endregion

//#region filter

// const arr = [1, 2, 3, 4, 5, 6];

// function myFuntion(el) {
//   return el > 2;
// }

// function myFilter(array, callback) {
//   const arr2 = [];
//   for (let index = 0; index < array.length; index++) {
//     if (callback(array[index], index, array)) {
//     arr2.push(array[index]);
//     }
//   }
//   return arr2;
// }

// console.log(myFilter(arr, myFuntion));

//#endregion

// #region some

// const arr = [1, 2, 3, 4, 5, 6];

// function myFuntion(el) {
//   return el > 5;
// }

// function mySome(array, callback) {
//     let check = true;
//   for (let index = 0; index < array.length; index++) {
//     if (check===callback(array[index])) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(mySome(arr, myFuntion));

//#endregion

//#region every

// const arr = [1, 2, 3, 4, 5, 6];

// function myFuntion(el) {
//   return el > 1;
// }

// function myEvery(array, callback) {
//     let check = true;
//   for (let index = 0; index < array.length; index++) {
//     if (check!==callback(array[index], index, array)) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(myEvery(arr, myFuntion));

//#endregion

//#region slice

// const arr = [1, 2, 3, 4, 5, 6];

// function mySlice(array, num1, num2) {
//   let arr2 = [];
//   if (typeof num2 !== "number") {
//     for (let index = num1; index < array.length; index++) {
//       arr2.push(array[index]);
//     }
//   } else {
//     for (let index = num1; index < num2; index++) {
//       arr2.push(array[index]);
//     }
//   }
//   return arr2;
// }
// console.log(mySlice(arr, 2));

//#endregion

//#region  indexOf

// const arr = [1, 2, 1, 4, 5, 6];

// function myIndexOf(array,el) {

// for (let index = 0; index < array.length; index++) {
//   if(el===array[index])
//   {
//     return index;
//   }
// }
// return -1;
// }
// console.log(myIndexOf(arr,7));

//#endregion

//#region  lastIndexOf 

// let arr = [1,5,10,4,5,10];

// function myLastIndexOf(array,el) {
//   for (let index = array.length-1 ; index >= 0 ; index--) {
//     if(el===array[index])
//     {
//       return index;
//     }
//   }
//   return -1;
// }

// console.log(myLastIndexOf(arr,5));

//#endregion

//#region find

// const arr = [1, 2, 3, 4, 5, 6];

// function myFuntion(el) {
//   return el > 4;
// }

// function myFind(array, callback) {
//     let check = true;
//   for (let index = 0; index < array.length; index++) {
//     if (check===callback(array[index])) {
//       return array[index];
//     }
//   }
//   return undefined;
// }

// console.log(myFind(arr, myFuntion));

//#endregion

//#region findIndex

// const arr = [1, 2, 3, 4, 5, 6];

// function myFuntion(el) {
//   return el > 5;
// }

// function myFindIndex(array, callback) {
//     let check = true;
//   for (let index = 0; index < array.length; index++) {
//     if (check===callback(array[index])) {
//       return index;
//     }
//   }
//   return -1;
// }

// console.log(myFindIndex(arr, myFuntion));

//#endregion

//#region from

// function myFrom(string) {
//   let arr = [];
//   for (let index = 0; index < string.length; index++) {
//     arr.push(string[index]);
//   }
//   return arr;
// }

// console.log(myFrom("salam"));

//#endregion

//#region keys

// let arr = ["Salam","P328","Necesiz?"]

// function myKeys(array) {
//   let arr = [];
//   for (let index = 0; index < array.length; index++) {
//     arr.push(index);
//   }
// return arr;
// }

// console.log(myKeys(arr));

//#endregion

//#region entries

// let arr = ["Salam","P328","Necesiz?"]

// function myEntries(array) {
//   let arr = [];
//   for (let index = 0; index < array.length; index++) {
//     arr.push(index+","+array[index]);
//   }
// return arr;
// }

// let testArray = myEntries(arr);

// for (let x of testArray) {
//   console.log(x);
// }

//#endregion
