function findFirstDuplicate(arr) {
  // type your code here
  let arr2 = []
  let result = -1;
  for (let i = 0; i < arr.length; i++){
    arr2.push(arr[i])
    for (let j = 0; j < arr2.length; j++){
      if(arr[i+1] === arr2[j]){
        return result = arr[j];
      }
    }
  }
  return result
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));

  console.log("Expecting: 7");
  console.log(findFirstDuplicate([7, 1, 2, 3, 7]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution

//iterate through array using a for loop
//inside that iteration use another for loop
  // if it the element matches the element of the first iteration return that element 
  // otherwise return false/ -1