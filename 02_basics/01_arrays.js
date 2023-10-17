// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods
                  
// myArr.push(6) //add element in the last of array
// myArr.push(7) 
// myArr.pop() //remove last element of array

// myArr.unshift(9)  //add eleements at begining in array
// myArr.shift()    //remove element at begining

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join() //method is used to create and return a new string by concatenating all the elements in an array. 
                               //also can specify seperator join(seperator) 
// console.log(myArr);        
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) //used to create a new array containing a copy of a portion of an existing array. 

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)  //takes three arguments: start (the index at which to start modifying the array), deleteCount (the number of elements                                
                                // to remove), and optional item1, item2, ... (elements to be added at the specified start index).
console.log("C ", myArr);
console.log(myn2);
