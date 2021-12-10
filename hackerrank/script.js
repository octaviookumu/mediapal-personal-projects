console.log("hello")

var myArray = ['a', 1, 'a', 2, '1'];

let unique = [...new Set(myArray)];

console.log(unique); // unique is ['a', 1, 2, '1']

let n = 9;
let ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];

let uniqueNums = []

function sockMerchant(n, ar) {
  // Write your code here
    
    // get unique numbers
    uniqueNums = [...new Set(ar)];

    // get the number of times unique number appears in ar array
    ar.forEach(num => {
        uniqueNums.forEach(uniqueNum => {
            if (ar.includes(uniqueNum)) {
                console.log("has");
            }
        })
    })
    
}

sockMerchant(n, ar);